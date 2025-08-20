import { useEffect, useState, type ChangeEvent } from "react";
import axios, { AxiosError } from "axios";
import type { TPeople } from "../../types";
import { getQueryParams } from "../../utils/getQueryParams/getQueryParams";

interface IUsePeopleInterface {
  search: string;
  page: number;
}

const usePeople = ({ search, page }: IUsePeopleInterface) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [people, setPeople] = useState<TPeople>([]);
  const [refresh, setRefresh] = useState(false);
  const [pagesCount, setPagesCount] = useState(10);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setError("");

      try {
        const params = { page: page.toString(), search };
        const queryParams = getQueryParams(params);
        // TODO: add base origin url and axios initial
        // TODO: add response type
        const { data } = await axios.get(
          `https://swapi.py4e.com/api/people?${queryParams}`
        );

        setPeople(data.results);
        setPagesCount(data.count);
      } catch (error) {
        if (error instanceof AxiosError) {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page, refresh, search]);

  const refetch = () => setRefresh(!refresh);

  return {
    isLoading,
    error,
    people,
    pagesCount,
    refetch,
  };
};

const useSearch = () => {
  const [search, setSearch] = useState("");

  const handleChangeSearch = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setSearch(e.target.value);

  const handleClearSearch = () => setSearch("");

  return { search, handleChangeSearch, handleClearSearch };
};

export { usePeople, useSearch };
