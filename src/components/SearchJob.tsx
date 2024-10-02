import { FormInputSearchVariation, FormInputType } from "@digi/arbetsformedlingen";
import { DigiFormInputSearch } from "@digi/arbetsformedlingen-react";
import { useState, useContext } from "react";
import { JobContext } from "../contexts/JobContext";
import { getJobsBySearch } from "../service/jobService";
import { ActionType } from "../reducers/JobReducer";

export const SearchJob = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { dispatch } = useContext(JobContext);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim() === "") return;

    try {
      const jobs = await getJobsBySearch(searchTerm);
      dispatch({ type: ActionType.SEARCHED, payload: jobs });
    } catch (error) {
      console.error("Error searching jobs:", error);
    }
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
          />
        </div>
      </form>
    </>
  );
};
