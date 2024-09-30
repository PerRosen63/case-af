import { useState, useEffect } from "react";
import { FormSelectFilterValidation } from "@digi/arbetsformedlingen";
import { DigiFormSelectFilter } from "@digi/arbetsformedlingen-react";
import { getOccupation } from "../service/taxonomyService"; // Hämta yrken från tjänsten

export const FilterBtnYrke = ({ selectedOccupations, setSelectedOccupations }) => {
  const [occupationItems, setOccupationItems] = useState([]);

  // Hämta yrken från API:et när komponenten laddas
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

  const handleOccupationChange = (selectedValues) => {
    setSelectedOccupations(selectedValues); // Uppdatera valda yrken i den överordnade komponenten
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
