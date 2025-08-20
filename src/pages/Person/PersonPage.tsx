import { useParams } from "react-router";
import { usePerson } from "./hooks";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { PersonForm } from "./components/PersonForm/PersonForm";

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      {Object.entries(restPerson)
        .filter(([_, value]) => typeof value === "string")
        .map(([key, value]) => {
          return <PersonForm key={key} name={key} value={value as string} />;
        })}
    </div>
  );
};
