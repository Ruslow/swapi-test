import { useMemo } from "react";
import { PaginationWrapper, SearchFormControl } from "./MainPage.styles";
import { People } from "./components/People";
import { useDebounce, usePagination } from "@hooks";
import { usePeople, useSearch } from "./hooks";
import { InputAdornment, Pagination, TextField } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";

export const MainPage = () => {
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
          onChange={handleChangeSearch}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: search ? (
                <InputAdornment position="end" onClick={handleClearSearch}>
                  <ClearIcon />
                </InputAdornment>
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
