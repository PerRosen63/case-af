import { DigiNavigationPagination } from "@digi/arbetsformedlingen-react";
import { DigiNavigationPaginationCustomEvent } from "@digi/arbetsformedlingen/dist/types/components";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  return (
    <DigiNavigationPagination
      afTotalPages={totalPages}
      afInitActivePage={currentPage}
      onAfOnPageChange={(event: DigiNavigationPaginationCustomEvent<number>) => {
        const newPage = event.detail;
        onPageChange(newPage);
      }}
    />
  );
};
