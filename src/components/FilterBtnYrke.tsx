import { useState, useEffect } from "react";
import { FormSelectFilterValidation } from "@digi/arbetsformedlingen";
import { DigiFormSelectFilter } from "@digi/arbetsformedlingen-react";
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
    </>
  );
};
