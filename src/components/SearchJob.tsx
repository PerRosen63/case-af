import { FormInputSearchVariation, FormInputType } from "@digi/arbetsformedlingen";
import { DigiFormInputSearch } from "@digi/arbetsformedlingen-react";
import { useState, useContext } from "react";
import { JobContext } from "../contexts/JobContext";
import { getJobsBySearch } from "../service/jobService";
import { ActionType } from "../reducers/JobReducer";
import { DigiNavigationPaginationCustomEvent } from "@digi/arbetsformedlingen/dist/types/components";

interface SearchJobProps {
  setTotalPages: (totalPages: number) => void;
  setCurrentPage: (currentPage: number) => void;
}

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
       // Sätt totalPages till ett värde baserat på API-responsen om tillgängligt
      // t.ex. setTotalPages(response.totalPages) om API:t stödjer det.

      setTotalPages(3); // Sätt exempelvärde tills API-data är tydlig
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };
  const handlePageChange = (event: DigiNavigationPaginationCustomEvent<number>) => {
    const newPage = event.detail;  // Extrahera sidnumret från eventet
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
    </>
  );
};
