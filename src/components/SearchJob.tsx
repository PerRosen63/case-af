import { FormInputSearchVariation, FormInputType } from "@digi/arbetsformedlingen";
import { DigiFormInputSearch } from "@digi/arbetsformedlingen-react";
import { useState } from "react";

interface ISearchJobProps {
  onSearch: (term: string) => void;
}

export const SearchJob = ({ onSearch }: ISearchJobProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim() === "") return;
    onSearch(searchTerm);
    setSearchTerm("");
  };

  return (
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
  );
};
