import { useParams } from "react-router";
import { usePerson } from "./hooks";
import { useTitle } from "@hooks";
import { PersonForm } from "./components/PersonForm";
import { Button, CircularProgress, Typography } from "@mui/material";
import * as motion from "motion/react-client";
import {
  ContentWrapper,
  ErrorWrapper,
  LoaderWrapper,
  PeopleList,
  Title,
} from "./PersonPage.styles";

export const PersonPage = () => {
  const { id } = useParams();
  const { isLoading, error, person, refetch } = usePerson(id);

  useTitle(person.name);

  if (isLoading) {
    return (
      <LoaderWrapper>
        <CircularProgress />
      </LoaderWrapper>
    );
  }

  if (error) {
    return (
      <ErrorWrapper>
        <Typography variant="h6" color="error" letterSpacing={1.5}>
          {error}
        </Typography>

        <Button size="small" variant="contained" onClick={refetch}>
          Try again
        </Button>
      </ErrorWrapper>
    );
  }

  const { name, created, edited, url, homeworld, ...restPerson } = person;

  return (
    <ContentWrapper>
      <Title variant="h4" letterSpacing={2}>
        {name}
      </Title>

      <PeopleList
        component={motion.ul}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {Object.entries(restPerson)
          .filter(([_, value]) => typeof value === "string")
          .map(([key, value]) => {
            return (
              <PersonForm
                key={key}
                name={key}
                value={value as string}
                id={id}
              />
            );
          })}
      </PeopleList>
    </ContentWrapper>
  );
};
