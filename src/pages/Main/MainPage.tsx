import { useMemo } from "react";
import {
  EndInputAdornment,
  PaginationWrapper,
  SearchFormControl,
} from "./MainPage.styles";
import { People } from "./components/People";
import { useDebounce, usePagination, useTitle } from "@hooks";
import { usePeople, useSearch } from "./hooks";
import { InputAdornment, Pagination, TextField } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";

export const MainPage = () => {
  useTitle("Main");

  const { search, handleChangeSearch, handleClearSearch } = useSearch();

  const debouncedSearch = useDebounce(search, 300);

  const { page, handlePageChange } = usePagination();

  const { isLoading, error, people, pagesCount, refetch } = usePeople({
    search: debouncedSearch,
    page,
  });

  const count = useMemo(() => Math.ceil(pagesCount / 10), [pagesCount]);

  return (
    <section>
      <SearchFormControl fullWidth>
        <TextField
          autoFocus
          size="small"
          variant="outlined"
          placeholder="Поиск"
          value={search}
          onChange={handleChangeSearch}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: search ? (
                <EndInputAdornment position="end" onClick={handleClearSearch}>
                  <ClearIcon />
                </EndInputAdornment>
              ) : null,
            },
          }}
        />
      </SearchFormControl>

      <People
        isLoading={isLoading}
        people={people}
        error={error}
        refetch={refetch}
      />

      {count > 1 && !error && (
        <PaginationWrapper>
          <Pagination
            color="primary"
            page={page}
            onChange={handlePageChange}
            count={count}
          />
        </PaginationWrapper>
      )}
    </section>
  );
};
