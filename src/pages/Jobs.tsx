import { useContext, useState } from "react";
import { FilterBtnYrke } from "../components/FilterBtnYrke";
import { JobsPresentation } from "../components/JobsPresentation";
import { JobContext } from "../contexts/JobContext";
import { OccupationsList } from "../components/OccupationsList";
import { SearchJob } from "../components/SearchJob";

export const Jobs = () => {
  const { jobs } = useContext(JobContext);

  const [selectedOccupations, setSelectedOccupations] = useState<string[]>([]);

  return (
    <div>
      <div>
        <SearchJob />
        <FilterBtnYrke
          selectedOccupations={selectedOccupations}
          setSelectedOccupations={setSelectedOccupations}
        />
        {/*         <OccupationsList selectedOccupations={selectedOccupations} />
         */}{" "}
        <OccupationsList></OccupationsList>
        <h1>Jobs</h1>
        <p>Antal jobb: {jobs.length}</p>
        <JobsPresentation />
      </div>
    </div>
  );
};
