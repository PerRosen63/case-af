
import { useContext } from "react";
import { useState } from "react";
import { FilterBtnYrke } from "../components/FilterBtnYrke";
import { JobsPresentation } from "../components/JobsPresentation";
import { JobContext } from "../contexts/JobContext";
import { OccupationsList } from "../components/OccupationsList";
import { SearchJob } from "../components/SearchJob";

export const Jobs = () => {
  const { jobs } = useContext(JobContext);
  return (
    <div>
      <div>
        <h1>Jobs</h1>
        <p>Antal jobb: {jobs.length}</p>
        <JobsPresentation />
      </div>

      <OccupationsList></OccupationsList>

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
