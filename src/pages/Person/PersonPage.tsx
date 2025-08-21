import { useParams } from "react-router";
import { usePerson } from "./hooks";
import { PersonForm } from "./components/PersonForm";
import { Box, Button, CircularProgress, Typography } from "@mui/material";

export const PersonPage = () => {
  const { id } = useParams();

  const { isLoading, error, person, refetch } = usePerson(id);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 32px)",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 32px)",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <Typography variant="h6" color="error" letterSpacing={1.5}>
          {error}
        </Typography>

        <Button size="small" variant="contained" onClick={refetch}>
          Try again
        </Button>
      </Box>
    );
  }

  const { name, created, edited, url, homeworld, ...restPerson } = person;

  return (
    <div>
      <Typography sx={{ mb: 3, textAlign: "center" }} variant="h4">
        {name}
      </Typography>

      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          height: "50vh",
        }}
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
      </ul>
    </div>
  );
};
