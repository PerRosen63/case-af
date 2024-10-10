import { useState } from "react";
import { OccupationsList } from "./OccupationsList.tsx";
import {
  DigiButton,
  DigiIconChevronDown,
} from "@digi/arbetsformedlingen-react";
import { ButtonSize, ButtonVariation } from "@digi/arbetsformedlingen";

export const FilterBtnYrke = () => {
  const [showOccupationsList, setShowOccupationsList] = useState(false);

  return (
    <>
      <div className="button-row">
        <DigiButton
          afSize={ButtonSize.MEDIUM}
          afVariation={ButtonVariation.PRIMARY}
          afFullWidth={false}
          /* onAfOnClick={() => {
            setShowOccupationsList(!showOccupationsList);
          }} */
        >
          Ort <DigiIconChevronDown />
        </DigiButton>
        <div className="button-wrapper">
          <DigiButton
            afSize={ButtonSize.MEDIUM}
            afVariation={ButtonVariation.PRIMARY}
            afFullWidth={false}
            onAfOnClick={() => {
              setShowOccupationsList(!showOccupationsList);
            }}
          >
            Yrke <DigiIconChevronDown />
          </DigiButton>
          {showOccupationsList && (
            <div className="occupations-list-popup">
              <OccupationsList></OccupationsList>
            </div>
          )}
        </div>

        <DigiButton
          afSize={ButtonSize.MEDIUM}
          afVariation={ButtonVariation.PRIMARY}
          afFullWidth={false}
          /* onAfOnClick={() => {
            setShowOccupationsList(!showOccupationsList);
          }} */
        >
          Filter <DigiIconChevronDown />
        </DigiButton>
      </div>
    </>
  );
};
