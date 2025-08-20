import type { FC } from "react";
import { Button, CircularProgress, Typography } from "@mui/material";
import { Person } from "../Person/Person";
import type { TPeople } from "../../../../types";
import { CenterWrapper, LoaderWrapper, PeopleWrapper } from "./People.styles";

interface PeopleProps {
  isLoading: boolean;
  error: string;
  people: TPeople;
  refetch: () => void;
}

export const People: FC<PeopleProps> = ({
  isLoading,
  people,
  error,
  refetch,
}) => {
  if (isLoading) {
    return (
      <LoaderWrapper>
        <CircularProgress />
      </LoaderWrapper>
    );
  }

  if (error) {
    return (
      <CenterWrapper>
        <Typography variant="h6" color="error" letterSpacing={1.5}>
          {error}
        </Typography>

        <Button size="small" variant="contained" onClick={refetch}>
          Try again
        </Button>
      </CenterWrapper>
    );
  }

  if (!people.length) {
    return (
      <CenterWrapper>
        <Typography variant="h6" letterSpacing={1.5}>
          Список пуст
        </Typography>
      </CenterWrapper>
    );
  }

  return (
    <PeopleWrapper>
      {people.map((person, index) => (
        <Person key={index} person={person} />
      ))}
    </PeopleWrapper>
  );
};
