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
      
      <FilterBtnYrke
        selectedOccupations={selectedOccupations}
        setSelectedOccupations={setSelectedOccupations}
      />

      <OccupationsList selectedOccupations={selectedOccupations} />

      <JobsPresentation />
    </div>
  );
};
