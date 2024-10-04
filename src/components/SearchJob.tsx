import { FormInputSearchVariation, FormInputType } from "@digi/arbetsformedlingen";
import { DigiFormInputSearch } from "@digi/arbetsformedlingen-react";
import { useState, useContext } from "react";
import { JobContext } from "../contexts/JobContext";
import { getJobsBySearch } from "../service/jobService";
import { ActionType } from "../reducers/JobReducer";

/*
interface SearchJobProps {
  setTotalPages: (totalPages: number) => void;
  setCurrentPage: (currentPage: number) => void;
}*/

export const SearchJob = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { dispatch } = useContext(JobContext);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim() === "") return;
    await fetchJobs(searchTerm, 1);
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
  /*
  const handlePageChange = (event: DigiNavigationPaginationCustomEvent<number>) => {
    const newPage = event.detail; 
    fetchJobs(searchTerm, newPage);
  };*/
  
  function setCurrentPage(page: number) {
    throw new Error("Function not implemented.");
  }
  
  function setTotalPages(arg0: number) {
    throw new Error("Function not implemented.");

  }
  
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
    </>
  );
};

