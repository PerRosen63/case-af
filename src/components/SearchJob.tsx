import { FormInputSearchVariation, FormInputType } from "@digi/arbetsformedlingen";
import { DigiFormInputSearch } from "@digi/arbetsformedlingen-react";

export const SearchJob = () => {

  return ( <>
  
  <DigiFormInputSearch
    afLabel="Sök jobb"
    afVariation={FormInputSearchVariation.MEDIUM}
    afType={FormInputType.SEARCH}	
    afButtonText="Sök"
  >
  </DigiFormInputSearch>

  
  
  </>)
};