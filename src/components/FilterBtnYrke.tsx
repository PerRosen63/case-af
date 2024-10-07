import {
  DigiButton,
  DigiIconChevronDown,
  DigiDialog,
} from "@digi/arbetsformedlingen-react";
import { OccupationsList } from "./OccupationsList.tsx";
import {
  ButtonSize,
  ButtonVariation,
  DialogSize,
} from "@digi/arbetsformedlingen";

/*
interface FilterBtnYrkeProps {
  selectedOccupations: string[];
  setSelectedOccupations: (occupations: string[]) => void;
}
*/

const toggleOccupationsList = () => {};

export const FilterBtnYrke = () => {
  return (
    <>
      <div className="button-row">
        <DigiButton
          afSize={ButtonSize.MEDIUM}
          afVariation={ButtonVariation.PRIMARY}
          afFullWidth={false}
          onAfOnClick={() => {
            toggleOccupationsList();
          }}
        >
          Yrke <DigiIconChevronDown />
        </DigiButton>
      </div>
      <OccupationsList></OccupationsList>
    </>
  );
};
