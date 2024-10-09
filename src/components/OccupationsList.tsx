import { useContext, useEffect, useState } from "react";
import { IOccupation } from "../models/IOccupation";
import { getOccupation } from "../service/taxonomyService";
import {
  DigiIconChevronRight,
  DigiTypography,
  DigiButton,
  DigiFormCheckbox,
} from "@digi/arbetsformedlingen-react";
import {
  ButtonSize,
  ButtonVariation,
  TypographyVariation,
} from "@digi/arbetsformedlingen";

import { OccupationContext } from "../contexts/OccupationContext";
import { ActionType } from "../reducers/OccupationReducer";

export const OccupationsList = () => {
  const [occupationsGroup, setOccupationsGruop] = useState<IOccupation[]>([]);

  const [openDivId, setOpenDivId] = useState<string | null>(null);

  const [selectedNarrower, setSelectedNarrower] = useState<{
    [groupId: string]: string[];
  }>({});

  const [selectAllStatus, setSelectAllStatus] = useState<{
    [groupId: string]: boolean;
  }>({});

  const { dispatch } = useContext(OccupationContext); // Access dispatch here

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

  const handleSubmit = () => {
    const selectedOccupations = occupationsGroup.flatMap((group) => {
      const narrowerIds = selectedNarrower[group.id] || [];

      // Check if all narrower occupations within a group are selected
      const isAllNarrowerSelected =
        narrowerIds.length === group.narrower.length;

      // If all narrower are selected, return only the groupId
      if (isAllNarrowerSelected) {
        return [{ groupId: group.id }];
      }

      // Otherwise, return an object with groupId and the selected narrowerIds
      else if (narrowerIds.length > 0) {
        return [{ groupId: group.id, narrowerIds: narrowerIds }];
      }

      // If none are selected, return an empty array so this group is skipped
      else {
        return [];
      }
    });

    console.log("Selected Occupations:", selectedOccupations);

    dispatch({
      type: ActionType.FILTER_OCCUPATIONS,
      payload: selectedOccupations,
    });
  };

  return (
    <>
      {/* <section> */}
      <div className="occupations-list-wrapper">
        <DigiTypography afVariation={TypographyVariation.SMALL}>
          <div className="list-header">
            <div className="list-header-left">
              <p>Yrkesområden</p>
            </div>
            <div className="list-header-right">
              <p>Yrken</p>
            </div>
          </div>
        </DigiTypography>
        <ul className="occupation-group">
          {occupationsGroup.map((occupationGroup) => (
            <li className="occupation-group-item" key={occupationGroup.id}>
              {/*                 <DigiFormCheckbox afLabel="" />
               */}{" "}
              <div className="occupation-group-button-wrapper">
                <DigiButton
                  afSize={ButtonSize.MEDIUM}
                  afVariation={ButtonVariation.SECONDARY}
                  afFullWidth={true}
                  onAfOnClick={() => {
                    toggleDiv(occupationGroup.id);
                  }}
                >
                  {occupationGroup.preferred_label}
                  <div className="button-icons">
                    <DigiIconChevronRight />
                  </div>
                </DigiButton>
              </div>
              <div className="occupation-narrower-outer-wrapper">
                {openDivId === occupationGroup.id && (
                  <div className="occupation-narrower-wrapper">
                    <DigiFormCheckbox
                      className="select-all"
                      afLabel="Välj alla"
                      afChecked={selectAllStatus[occupationGroup.id] || false}
                      onAfOnChange={(e) => {
                        console.log(
                          "Yrkesområden e.target.checked:",
                          occupationGroup.id
                        );
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
                          console.log(
                            "Yrken e.target.checked:",
                            narrowerOccupation.id
                          );
                          handleIndividualCheckboxChange(
                            narrowerOccupation.id,
                            e.target.checked
                          );
                        }}
                      ></DigiFormCheckbox>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
        <div className="popup-footer">
          <DigiButton afSize={ButtonSize.MEDIUM} onAfOnClick={handleSubmit}>
            Visa ...
          </DigiButton>
        </div>
      </div>
      {/* </section> */}
    </>
  );
};
