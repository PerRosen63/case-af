import { JobsPresentation } from "../components/JobsPresentation";
import { OccupationsList } from "../components/OccupationsList";
import { SearchJob } from "../components/SearchJob";

export const Jobs = () => {
  return (
    <div>
      <h2>Jobs</h2>

      <SearchJob />

      <OccupationsList></OccupationsList>
      <JobsPresentation></JobsPresentation>
    </div>
  );
};
