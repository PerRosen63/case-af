import { useContext, useState } from "react";
import { FilterBtnYrke } from "../components/FilterBtnYrke";
import { JobsPresentation } from "../components/JobsPresentation";
import { JobContext } from "../contexts/JobContext";
import { SearchJob } from "../components/SearchJob";

import { DigiTypography } from "@digi/arbetsformedlingen-react";
import { TypographyVariation } from "@digi/arbetsformedlingen";

import { Pagination } from "../components/Pagination";
import { getJobsBySearch, JOBS_PER_PAGE } from "../service/jobService";
import { ActionType } from "../reducers/JobReducer";


export const Jobs = () => {
  const { jobs, dispatch } = useContext(JobContext);

  // const [selectedOccupations, setSelectedOccupations] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [activeSearchTerm, setActiveSearchTerm] = useState<string>("");

  const fetchJobs = async (term: string, page: number) => {
    try {
      const jobs = await getJobsBySearch(term, page);
      dispatch({ type: ActionType.SEARCHED, payload: jobs });
      setCurrentPage(page);

      const totalHits = 100;
      const jobsPerPage = JOBS_PER_PAGE;
      setTotalPages(Math.ceil(totalHits / jobsPerPage));
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const handlePageChange = (newPage: number) => {
    fetchJobs(activeSearchTerm, newPage);
  };

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
