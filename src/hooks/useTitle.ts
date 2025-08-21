import { useEffect } from "react";

const useTitle = (title: string) => {
  useEffect(() => {
    document.title = `SWAPI-TEST | ${title}`;
  }, [title]);
};

export { useTitle };
