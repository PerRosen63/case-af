import { useContext } from "react";
import { JobsPresentation } from "../components/JobsPresentation";
import { JobContext } from "../contexts/JobContext";
import { OccupationsList } from "../components/OccupationsList";

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
    </div>
  );
};
