import { FormSelectFilterValidation } from "@digi/arbetsformedlingen";
import { DigiFormSelectFilter } from "@digi/arbetsformedlingen-react";

export const FilterBtnYrke = () => {

  
  _listItems: IListItems[] = [
    {"label":"Danska"},
    {"label":"Tyska"},
    {"label":"Ryska"},
    {"label":"Franska"},
    {"label":"Finska"},
    {"label":"Holländska"},
    {"label":"Italienska"},
    {"label":"Spanska"},
    {"label":"Grekiska"},
    {"label":"Romänska"}
    ]


  return (<>
   <DigiFormSelectFilter
    afFilterButtonTextLabel="Välj språk"
    afDescription="Beskrivande text"
    afFilterButtonText="Inget språk valt"
    afSubmitButtonText="Filtrera"
    afMultipleItems={true}
    afValidation={FormSelectFilterValidation.NEUTRAL}
    afListItems={listItems}
      
  >
  </DigiFormSelectFilter>
  
  
  </>)
};