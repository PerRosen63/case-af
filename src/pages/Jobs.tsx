import { JobsPresentation } from "../components/JobsPresentation";
import { OccupationsList } from "../components/OccupationsList";

export const Jobs = () => {
  return (
    <div>
      <h2>Jobs</h2>
      <OccupationsList></OccupationsList>
      <JobsPresentation></JobsPresentation>
    </div>
  );
};
