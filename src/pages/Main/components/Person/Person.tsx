import type { FC } from "react";
import { Link } from "react-router";
import type { IPerson } from "@customTypes";
import { snakeCaseToWords } from "@utils";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

interface PersonProps {
  person: IPerson;
}

export const Person: FC<PersonProps> = ({ person }) => {
  const { name, created, edited, url, homeworld, ...restPerson } = person;

  const spittedUrl = url.split("/");
  const id = spittedUrl[spittedUrl.length - 2];

  return (
    <Link to={`people/${id}`}>
      <Card sx={{ width: 345 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
              }}
            >
              {Object.entries(restPerson)
                .filter(([_, value]) => typeof value === "string")
                .map(([key, value]) => {
                  return (
                    <div
                      key={key}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <h4>{snakeCaseToWords(key)}:</h4>
                      <p>{value}</p>
                    </div>
                  );
                })}
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
