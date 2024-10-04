import { DigiNavigationPagination } from "@digi/arbetsformedlingen-react";
import { DigiNavigationPaginationCustomEvent } from "@digi/arbetsformedlingen/dist/types/components";


interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

export const Pagination = ({
  //currentPage,
  //totalPages,
  onPageChange,
}: PaginationProps) => {
  const handlePageChange = (event: DigiNavigationPaginationCustomEvent<number>) => {
    const newPage = event.detail;
    onPageChange(newPage); // Anropar funktionen som hämtar nya jobb
  };

  return (
    <DigiNavigationPagination
      afTotalPages={10}
      afInitActivePage={1}
      //afTotalResults={6}
      onAfOnPageChange={handlePageChange}
      />
  );
};
