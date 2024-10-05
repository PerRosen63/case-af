import { FormInputSearchVariation, FormInputType } from "@digi/arbetsformedlingen";
import { DigiFormInputSearch } from "@digi/arbetsformedlingen-react";
import { useState, useContext } from "react";
import { JobContext } from "../contexts/JobContext";
import { getJobsBySearch } from "../service/jobService";
import { ActionType } from "../reducers/JobReducer";
import { Pagination } from "./Pagination"; // Lägg till pagineringen här

export const SearchJob = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1); // Initialt 1 sida
  const { dispatch } = useContext(JobContext);

  // Funktion som hämtar jobb baserat på sökterm och sida
  const fetchJobs = async (term: string, page: number) => {
    try {
      const jobs = await getJobsBySearch(term, page);
      dispatch({ type: ActionType.SEARCHED, payload: jobs });
      setCurrentPage(page);

      // Uppdatera det totala antalet sidor baserat på API-svaret (t.ex. via totalHits)
      const totalHits = 100; // Exempelvärde, ersätt med ditt API-svar om det finns
      const jobsPerPage = 5; // Antal jobb per sida
      setTotalPages(Math.ceil(totalHits / jobsPerPage));
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  // Hanterar när sökformuläret skickas
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim() === "") return;
    await fetchJobs(searchTerm, 1); // Börja alltid på sida 1
  };

  // Hanterar sidbyte i pagineringen
  const handlePageChange = (newPage: number) => {
    fetchJobs(searchTerm, newPage); // Hämta resultat för den nya sidan
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

      {/* Lägg till pagineringen */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};
