import { useContext } from "react";
import { FilterBtnYrke } from "../components/FilterBtnYrke";
import { JobsPresentation } from "../components/JobsPresentation";
import { JobContext } from "../contexts/JobContext";
import { SearchJob } from "../components/SearchJob";

export const Jobs = () => {
  const { jobs } = useContext(JobContext);

  return (
    <div>
      <div>
        <SearchJob />
        <FilterBtnYrke />
        <h1>Jobs</h1>
        <p>Antal jobb: {jobs.length}</p>
        <JobsPresentation />
      </div>
    </div>
  );
};
