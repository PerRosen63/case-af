import { useContext, useState } from "react";
import { FilterBtnYrke } from "../components/FilterBtnYrke";
import { JobsPresentation } from "../components/JobsPresentation";
import { JobContext } from "../contexts/JobContext";
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

      </div>
      <JobsPresentation currentPage={1} totalPages={10} onPageChange={function (newPage: number): void {
        throw new Error("Function not implemented.");
      } } />



      {/* <OccupationsList selectedOccupations={selectedOccupations} />*/}
    </div>
  );
};
