import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import type { IPerson } from "../../types";
import { axiosInstance } from "../../axiosInstance";

const usePerson = (id: string | undefined) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [person, setPerson] = useState<IPerson>({
    birth_year: "",
    created: "",
    edited: "",
    eye_color: "",
    films: [],
    gender: "",
    hair_color: "",
    height: "",
    homeworld: "",
    mass: "",
    name: "",
    skin_color: "",
    species: [],
    starships: [],
    url: "",
    vehicles: [],
  });

  const [refresh, setRefresh] = useState(false);
  const refetch = () => setRefresh(!refresh);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setError("");

      try {
        const { data } = await axiosInstance.get(`people/${id}`);

        setPerson(data);
      } catch (error) {
        if (error instanceof AxiosError) {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id, refresh]);

  return { isLoading, error, person, refetch };
};

export { usePerson };
