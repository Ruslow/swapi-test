import type { FC } from "react";
import { CenterWrapper, LoaderWrapper, PeopleWrapper } from "./People.styles";
import type { TPeople } from "@customTypes";
import { Person } from "../Person";
import { Button, CircularProgress, Typography } from "@mui/material";

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
