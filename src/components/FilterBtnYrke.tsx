import {
  DigiButton,
  DigiExpandableAccordion,
  DigiFormCheckbox,
  DigiFormFilter,
  DigiIconChevronDown,
} from "@digi/arbetsformedlingen-react";
import { OccupationsList } from "./OccupationsList";
import { ButtonSize, ButtonVariation } from "@digi/arbetsformedlingen";

/*
interface FilterBtnYrkeProps {
  selectedOccupations: string[];
  setSelectedOccupations: (occupations: string[]) => void;
}
*/

export const FilterBtnYrke = () => {
  return (
    <>
      <div className="button-row">
        <DigiButton
          afSize={ButtonSize.MEDIUM}
          afVariation={ButtonVariation.PRIMARY}
          afFullWidth={false}
        >
          Yrke <DigiIconChevronDown />
        </DigiButton>
      </div>
      <OccupationsList></OccupationsList>
    </>
  );
};
