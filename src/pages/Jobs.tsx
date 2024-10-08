import { useContext, useState } from "react";
import { FilterBtnYrke } from "../components/FilterBtnYrke";
import { JobsPresentation } from "../components/JobsPresentation";
import { JobContext } from "../contexts/JobContext";
import { OccupationsList } from "../components/OccupationsList";
import { SearchJob } from "../components/SearchJob";
import { DigiTypography } from "@digi/arbetsformedlingen-react";
import { TypographyVariation } from "@digi/arbetsformedlingen";

export const Jobs = () => {
  const { jobs } = useContext(JobContext);

  const [selectedOccupations, setSelectedOccupations] = useState<string[]>([]);

  return (
    <div>
      <div>
        <div className="container-jobs-search-filter">
          <div className="jobs-search-filter">
            <SearchJob />
            <FilterBtnYrke
              selectedOccupations={selectedOccupations}
              setSelectedOccupations={setSelectedOccupations}
            />
          </div>
        </div>
        {/*         <OccupationsList selectedOccupations={selectedOccupations} />
         */}{" "}
        <DigiTypography
          afVariation={TypographyVariation.SMALL}>
          <div className="number-of-jobs">
            <h1>Jobs</h1>
            <p>Antal jobb: {jobs.length}</p>
          </div>
        </DigiTypography>
        <JobsPresentation />
        <OccupationsList></OccupationsList>
      </div>
    </div>
  );
};
