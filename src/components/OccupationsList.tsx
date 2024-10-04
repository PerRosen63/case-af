import { useEffect, useState } from "react";
import { IOccupation } from "../models/IOccupation";
import { getOccupation } from "../service/taxonomyService";
import { DigiButton, DigiFormCheckbox } from "@digi/arbetsformedlingen-react";
import { ButtonSize, ButtonVariation } from "@digi/arbetsformedlingen";

export const OccupationsList = () => {
  const [occupationsGroup, setOccupationsGruop] = useState<IOccupation[]>([]);

  // State to track which div is open (using groupId as the key)
  const [openDivId, setOpenDivId] = useState<string | null>(null);

  // State to track filter selections for each group
  const [selectedNarrower, setSelectedNarrower] = useState<{
    [groupId: string]: string[];
  }>({});

  // State to track "Select All" status for each group
  const [selectAllStatus, setSelectAllStatus] = useState<{
    [groupId: string]: boolean;
  }>({});

  // Fetch data ONLY ONCE when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const data = await getOccupation();
      setOccupationsGruop(data);
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once

  // Handle "Select All" checkbox change
  const handleSelectAllChange = (groupId: string, checked: boolean) => {
    console.log("handleSelectAllChange called", groupId, checked); // Log at the beginning

    setSelectAllStatus((prevStatus) => ({
      ...prevStatus,
      [groupId]: checked,
    }));

    // Directly update selectedNarrower for "Select All"
    setSelectedNarrower((prevSelected) => {
      const updatedSelected = { ...prevSelected };
      if (checked) {
        // Select All: Add all IDs to the group
        updatedSelected[groupId] =
          occupationsGroup
            .find((group) => group.id === groupId)
            ?.narrower.map((narrower) => narrower.id) || [];
      } else {
        // Deselect All: Clear the array for the group
        updatedSelected[groupId] = [];
      }
      return updatedSelected;
    });
  };

  // Handle individual checkbox changes within the filter
  const handleIndividualCheckboxChange = (id: string, isChecked: boolean) => {
    console.log("handleIndividualCheckboxChange called", id, isChecked); // Log at the beginning

    // Find the groupId based on the id of the narrowerOccupation
    const groupId = occupationsGroup.find((group) =>
      group.narrower.some((narrower) => narrower.id === id)
    )?.id;

    if (!groupId) {
      console.error("Could not find groupId for checkbox with id:", id);
      return; // Or handle the error in a more appropriate way
    }

    // Update selectedNarrower based on individual checkbox changes
    setSelectedNarrower((prevSelected) => {
      const updatedSelected = { ...prevSelected };

      // Check if updatedSelected[groupId] exists and is an array
      if (
        !updatedSelected[groupId] ||
        !Array.isArray(updatedSelected[groupId])
      ) {
        updatedSelected[groupId] = []; // Create an empty array if it doesn't exist or is not an array
      }

      if (isChecked) {
        // Add the ID if it's not already in the array
        if (!updatedSelected[groupId].includes(id)) {
          updatedSelected[groupId].push(id);
        }
      } else {
        // Remove the ID from the array
        updatedSelected[groupId] = updatedSelected[groupId].filter(
          (itemId) => itemId !== id
        );
      }

      // Update selectAllStatus based on the state of all checkboxes in the group
      const allNarrowerIds =
        occupationsGroup
          .find((group) => group.id === groupId)
          ?.narrower.map((narrower) => narrower.id) || [];
      const isAllChecked = allNarrowerIds.every((itemId) =>
        updatedSelected[groupId].includes(itemId)
      );
      setSelectAllStatus((prevStatus) => ({
        ...prevStatus,
        [groupId]: isAllChecked,
      }));

      return updatedSelected;
    });
  };

  /*   useEffect(() => {
    console.log("selectAllStatus updated:", selectAllStatus);
  }, [selectAllStatus]);

  useEffect(() => {
    console.log("selectedNarrower updated:", selectedNarrower);
  }, [selectedNarrower]); */

  // Function to toggle the visibility of a div
  const toggleDiv = (groupId: string) => {
    setOpenDivId((prevId) => (prevId === groupId ? null : groupId));
  };

  return (
    <>
      <h1>Occupations List</h1>
      <div>
        <ul className="occupation-group">
          {occupationsGroup.map((occupationGroup) => (
            <li className="occupation-group-item" key={occupationGroup.id}>
              <DigiButton
                afSize={ButtonSize.MEDIUM}
                afVariation={ButtonVariation.SECONDARY}
                afFullWidth={true}
                onAfOnClick={() => {
                  toggleDiv(occupationGroup.id);
                }}
              >
                {occupationGroup.preferred_label}
              </DigiButton>
              {openDivId === occupationGroup.id && (
                <div>
                  <DigiFormCheckbox
                    afLabel="Välj alla"
                    afChecked={selectAllStatus[occupationGroup.id] || false} // Assuming a "checked" prop
                    onAfOnChange={(e) => {
                      console.log("Event object:", e);
                      console.log("e.target.checked:", e.target.checked);
                      console.log("e.target.checked:", occupationGroup.id);
                      handleSelectAllChange(
                        occupationGroup.id,
                        e.target.checked
                      );
                    }}
                  ></DigiFormCheckbox>
                  {/* Map out the narrowerOccupation checkboxes */}
                  {occupationGroup.narrower.map((narrowerOccupation) => (
                    <DigiFormCheckbox
                      key={narrowerOccupation.id}
                      afLabel={narrowerOccupation.preferred_label}
                      afChecked={
                        selectedNarrower[occupationGroup.id]?.includes(
                          narrowerOccupation.id
                        ) || false
                      }
                      onAfOnChange={(e) => {
                        handleIndividualCheckboxChange(
                          narrowerOccupation.id,
                          e.target.checked
                        );
                      }}
                    ></DigiFormCheckbox>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
