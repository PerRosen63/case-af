import { useEffect, useState } from "react";
import { IOccupation } from "../models/IOccupation";
import { getOccupation } from "../service/taxonomyService";
import {
  //DigiFormCheckbox,
  DigiFormFilter,
} from "@digi/arbetsformedlingen-react";
import { FormFilterItem } from "@digi/arbetsformedlingen";

interface ExtendedFormFilterItem extends FormFilterItem {
  isSelectAll?: boolean; // Optional property
}

export const OccupationsList = () => {
  const [occupationsGroup, setOccupationsGruop] = useState<IOccupation[]>([]);

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

  // Handle changes in filter selections
  const handleFilterChange = (groupId: string, selectedValues: string[]) => {
    setSelectedNarrower((prevSelected) => ({
      ...prevSelected,
      [groupId]: selectedValues,
    }));
  };

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
    console.log("handleIndividualCheckboxChange called", id, isChecked);

    if (id.startsWith("selectAll-")) {
      const groupId = id.replace("selectAll-", ""); // Extract groupId from ID
      handleSelectAllChange(groupId, isChecked);
    } else {
      // Extract groupId from the individual checkbox ID (assuming a pattern like 'checkbox-{groupId}')
      const groupId = id.replace("checkbox-", ""); // Adjust this based on your ID pattern
      // Update selectedNarrower based on individual checkbox changes
      setSelectedNarrower((prevSelected) => {
        const updatedSelected = { ...prevSelected };

        // Check if the groupId exists in updatedSelected
        if (!updatedSelected[groupId]) {
          updatedSelected[groupId] = []; // Create an empty array if it doesn't
        }

        // Now you can safely access updatedSelected[groupId]
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

        return updatedSelected;
      });
    }
  };

  useEffect(() => {
    console.log("selectAllStatus updated:", selectAllStatus);
  }, [selectAllStatus]);

  useEffect(() => {
    console.log("selectedNarrower updated:", selectedNarrower);
  }, [selectedNarrower]);

  return (
    <>
      <h1>Occupations List</h1>
      <div>
        <ul className="occupation-group">
          {occupationsGroup.map((occupationGroup) => (
            <li className="occupation-group-item" key={occupationGroup.id}>
              <DigiFormFilter
                afFilterButtonText={occupationGroup.preferred_label}
                afSubmitButtonText="Filtrera"
                onAfChangeFilter={(e) => {
                  handleIndividualCheckboxChange(
                    e.detail.id,
                    e.detail.isChecked
                  );
                }}
                onAfSubmitFilter={(e) =>
                  handleFilterChange(occupationGroup.id, e.detail.checked)
                }
                afListItems={[
                  // "Select All" checkbox as the first item in the array
                  {
                    id: `selectAll-${occupationGroup.id}`, // Unique ID for "Select All"
                    label: "Välj alla",
                    isSelectAll: true,
                  } as ExtendedFormFilterItem,
                  // ... other filter items from the map ...
                  ...occupationGroup.narrower.map((narrowerOccupation) => ({
                    id: narrowerOccupation.id,
                    label: narrowerOccupation.preferred_label,
                  })),
                ]}
                // Pass selectedNarrower to afCheckItems
                afCheckItems={selectedNarrower[occupationGroup.id] || []}
              >
                {/* <DigiFormCheckbox
                  afLabel="Välj alla"
                  afChecked={selectAllStatus[occupationGroup.id] || false} // Assuming a "checked" prop
                  onAfOnChange={(e) => {
                    console.log("Event object:", e);
                    console.log("e.target.checked:", e.target.checked);
                    console.log("e.target.checked:", occupationGroup.id);
                    handleSelectAllChange(occupationGroup.id, e.target.checked);
                  }}
                ></DigiFormCheckbox> */}
                {/* {occupationGroup.narrower.map((narrowerOccupation) => (
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
                ))} */}
              </DigiFormFilter>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
