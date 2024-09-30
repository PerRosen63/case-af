import { FormInputVariation, FormInputType, FormInputValidation } from "@digi/arbetsformedlingen";
import { DigiFormInput } from "@digi/arbetsformedlingen-react";

export const SearchJob = () => {

  return ( <>
  
  <DigiFormInput
    afLabel="Sök:"
    afVariation={FormInputVariation.MEDIUM}
    afType={FormInputType.TEXT}
    afValidation={FormInputValidation.NEUTRAL}	 	
    afInputmode="{FormInputMode.SEARCH}"	 	
  >
  </DigiFormInput>
  
  
  
  </>)
};