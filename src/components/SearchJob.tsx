import { FormInputSearchVariation, FormInputType } from "@digi/arbetsformedlingen";
import { DigiFormInputSearch } from "@digi/arbetsformedlingen-react";
import { useState, useContext } from "react";
import { JobContext } from "../contexts/JobContext";
import { getJobsBySearch } from "../service/jobService";
import { ActionType } from "../reducers/JobReducer";
import { JobsPresentation } from "./JobsPresentation";
import { Pagination } from "./Pagination";

export const SearchJob = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const { dispatch } = useContext(JobContext);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim() === "") return;
    await fetchJobs(searchTerm, 1);  // Hämta första sidan med jobb
  };

  const fetchJobs = async (term: string, page: number) => {
    try {
      const jobs = await getJobsBySearch(term, page);
      dispatch({ type: ActionType.SEARCHED, payload: jobs });
      setCurrentPage(page);

      setTotalPages(3);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const handlePageChange = (newPage: number) => {
    fetchJobs(searchTerm, newPage);
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <div className="search-input">
          <DigiFormInputSearch
            afLabel="Sök jobb"
            afVariation={FormInputSearchVariation.MEDIUM}
            afType={FormInputType.SEARCH}	
            afButtonText="Sök"
            onAfOnChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </div>
      </form>
      <JobsPresentation currentPage={0} totalPages={0} onPageChange={function (newPage: number): void {
        throw new Error("Function not implemented.");
      } } />
      
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};
