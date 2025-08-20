import { useState, type ChangeEvent } from "react";

const usePagination = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (_e: ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  return { page, handlePageChange };
};

export { usePagination };
