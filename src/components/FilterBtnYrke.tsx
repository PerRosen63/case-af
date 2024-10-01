import { useState, useEffect } from "react";
import { FormSelectFilterValidation } from "@digi/arbetsformedlingen";
import { DigiFormFilter, DigiFormSelectFilter } from "@digi/arbetsformedlingen-react";
import { getOccupation } from "../service/taxonomyService"; 

interface FilterBtnYrkeProps {
  selectedOccupations: string[];
  setSelectedOccupations: (occupations: string[]) => void;
}

export const FilterBtnYrke = ({ selectedOccupations, setSelectedOccupations }: FilterBtnYrkeProps) => {
  const [occupationItems, setOccupationItems] = useState<{ label: string; value: string }[]>([]);

  useEffect(() => {
    const fetchOccupations = async () => {
      const occupations = await getOccupation();
      const formattedOccupations = occupations.map((occupation) => ({
        label: occupation.preferred_label,
        value: occupation.id
      }));
      setOccupationItems(formattedOccupations);
    };

    fetchOccupations();
  }, []);

  const handleOccupationChange = (selectedValues: string[]) => {
    setSelectedOccupations(selectedValues);
  };

  
  return (
    <>
      <div className="filter-buttons">
        <DigiFormFilter
          afFilterButtonText="Ort"
          afSubmitButtonText="Filtrera"
          afListItems={[{"id":"omr1","label":"Område 1"},{"id":"omr2","label":"Område 2"},{"id":"omr3","label":"Område 3"}]}
          afCheckItems={["omr2"]} // optional, override internal check state of component with filter ids
          onAfChangeFilter={(e) => console.log(e.detail.id, e.detail.isChecked)}
          onAfResetFilter={() => console.log("reset filter")}
          onAfSubmitFilter={(e) => console.log("submit filter", e.detail.listItems, e.detail.checked)}
          onAfCloseFilter={(e) => console.log("submit filter", e.detail.listItems, e.detail.checked)} >
        </ DigiFormFilter>

        <DigiFormFilter
          afFilterButtonText="Yrke"
          afSubmitButtonText="Filtrera"
          afListItems={[{"id":"omr1","label":"Område 1"},{"id":"omr2","label":"Område 2"},{"id":"omr3","label":"Område 3"}]}
          afCheckItems={["omr2"]} // optional, override internal check state of component with filter ids
          onAfChangeFilter={(e) => console.log(e.detail.id, e.detail.isChecked)}
          onAfResetFilter={() => console.log("reset filter")}
          onAfSubmitFilter={(e) => console.log("submit filter", e.detail.listItems, e.detail.checked)}
          onAfCloseFilter={(e) => console.log("submit filter", e.detail.listItems, e.detail.checked)} >
        </ DigiFormFilter>

        <DigiFormFilter
          afFilterButtonText="Filter"
          afSubmitButtonText="Filtrera"
          afListItems={[{"id":"omr1","label":"Område 1"},{"id":"omr2","label":"Område 2"},{"id":"omr3","label":"Område 3"}]}
          afCheckItems={["omr2"]} // optional, override internal check state of component with filter ids
          onAfChangeFilter={(e) => console.log(e.detail.id, e.detail.isChecked)}
          onAfResetFilter={() => console.log("reset filter")}
          onAfSubmitFilter={(e) => console.log("submit filter", e.detail.listItems, e.detail.checked)}
          onAfCloseFilter={(e) => console.log("submit filter", e.detail.listItems, e.detail.checked)} >
        </ DigiFormFilter>
      </div>


     {/*
      <DigiFormSelectFilter
        afFilterButtonTextLabel="Välj yrke"
        afDescription="Välj ett eller flera yrken från listan"
        afFilterButtonText="Välj yrke"
        afSubmitButtonText="Filtrera"
        afMultipleItems={true}
        afValidation={FormSelectFilterValidation.NEUTRAL}
        afListItems={occupationItems}
        afOnChange={handleOccupationChange}
        afSelectedItems={selectedOccupations}
      />
      */}
    </>
  );
};
