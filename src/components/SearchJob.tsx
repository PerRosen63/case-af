import { FormInputSearchVariation, FormInputType } from "@digi/arbetsformedlingen";
import { DigiFormInputSearch } from "@digi/arbetsformedlingen-react";
import { useState, useContext } from "react";
import { JobContext } from "../contexts/JobContext";
import { getJobsBySearch } from "../service/jobService";
import { ActionType } from "../reducers/JobReducer";

export const SearchJob = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { dispatch } = useContext(JobContext);

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      return; // Gör ingenting om söksträngen är tom
    }
    const jobs = await getJobsBySearch(searchTerm);
    dispatch({ type: ActionType.SEARCHED, payload: jobs });
    //dispatch({ type: ActionType.SEARCHED, payload: JSON.stringify(jobs) });
   // dispatch({ type: "SET_JOBS", payload: jobs }); // Uppdatera jobblistan i kontexten
  };


  
  return ( <>
    <div className="search-input">
      <DigiFormInputSearch
        afLabel="Sök jobb"
        afVariation={FormInputSearchVariation.MEDIUM}
        afType={FormInputType.SEARCH}	
        afButtonText="Sök"
        onAfOnChange={(e) => setSearchTerm(e.target.value)}
          onAfOnSubmit={handleSearch}
      >
      </DigiFormInputSearch>
    </div>
  </>)
};

