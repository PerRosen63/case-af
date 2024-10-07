import { useEffect, useState } from "react";
import { IOccupation } from "../models/IOccupation";
import { getOccupation } from "../service/taxonomyService";
import { DigiButton, DigiFormCheckbox } from "@digi/arbetsformedlingen-react";
import { ButtonSize, ButtonVariation } from "@digi/arbetsformedlingen";

export const OccupationsList = () => {
  const [occupationsGroup, setOccupationsGruop] = useState<IOccupation[]>([]);

  const [openDivId, setOpenDivId] = useState<string | null>(null);

  const [selectedNarrower, setSelectedNarrower] = useState<{
    [groupId: string]: string[];
  }>({});

  const [selectAllStatus, setSelectAllStatus] = useState<{
    [groupId: string]: boolean;
  }>({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getOccupation();
      setOccupationsGruop(data);
    };

    fetchData();
  }, []);

  const handleSelectAllChange = (groupId: string, checked: boolean) => {
    setSelectAllStatus((prevStatus) => ({
      ...prevStatus,
      [groupId]: checked,
    }));

    setSelectedNarrower((prevSelected) => {
      const updatedSelected = { ...prevSelected };
      if (checked) {
        updatedSelected[groupId] =
          occupationsGroup
            .find((group) => group.id === groupId)
            ?.narrower.map((narrower) => narrower.id) || [];
      } else {
        updatedSelected[groupId] = [];
      }
      return updatedSelected;
    });
  };

  const handleIndividualCheckboxChange = (id: string, isChecked: boolean) => {
    const groupId = occupationsGroup.find((group) =>
      group.narrower.some((narrower) => narrower.id === id)
    )?.id;

    if (!groupId) {
      return;
    }

    setSelectedNarrower((prevSelected) => {
      const updatedSelected = { ...prevSelected };

      if (
        !updatedSelected[groupId] ||
        !Array.isArray(updatedSelected[groupId])
      ) {
        updatedSelected[groupId] = [];
      }

      if (isChecked) {
        if (!updatedSelected[groupId].includes(id)) {
          updatedSelected[groupId].push(id);
        }
      } else {
        updatedSelected[groupId] = updatedSelected[groupId].filter(
          (itemId) => itemId !== id
        );
      }

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
                    afChecked={selectAllStatus[occupationGroup.id] || false}
                    onAfOnChange={(e) => {
                      console.log("e.target.checked:", occupationGroup.id);
                      handleSelectAllChange(
                        occupationGroup.id,
                        e.target.checked
                      );
                    }}
                  ></DigiFormCheckbox>
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
