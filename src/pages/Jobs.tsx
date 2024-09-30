import { useState } from "react";
import { FilterBtnYrke } from "../components/FilterBtnYrke";
import { JobsPresentation } from "../components/JobsPresentation";
import { OccupationsList } from "../components/OccupationsList";
import { SearchJob } from "../components/SearchJob";

export const Jobs = () => {
  const [selectedOccupations, setSelectedOccupations] = useState<string[]>([]);

  return (
    <div>
      <h2>Jobs</h2>

      <SearchJob />
      
      {/* Skicka valda yrken och funktionen för att uppdatera dem till FilterBtnYrke */}
      <FilterBtnYrke
        selectedOccupations={selectedOccupations}
        setSelectedOccupations={setSelectedOccupations}
      />

      {/* Skicka valda yrken till OccupationsList för att filtrera listan */}
      <OccupationsList selectedOccupations={selectedOccupations} />

      <JobsPresentation />
    </div>
  );
};
