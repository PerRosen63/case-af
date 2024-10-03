import { DigiNavigationPagination } from "@digi/arbetsformedlingen-react";

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
      onAfPageChange={(newPage) => onPageChange(newPage)}
    />
  );
};
