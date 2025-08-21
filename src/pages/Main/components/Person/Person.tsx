import type { FC } from "react";
import { Link } from "react-router";
import type { IPerson } from "@customTypes";
import { snakeCaseToWords } from "@utils";
import { CardActionArea, CardContent, Typography } from "@mui/material";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import {
  CustomCard,
  KeyWrapper,
  PersonStat,
  PersonStats,
} from "./Person.styles";

interface PersonProps {
  person: IPerson;
}

export const Person: FC<PersonProps> = ({ person }) => {
  const { name, created, edited, url, homeworld, ...restPerson } = person;

  const spittedUrl = url.split("/");
  const id = spittedUrl[spittedUrl.length - 2];

  return (
    <AnimatePresence mode="wait">
      <Link to={`people/${id}`}>
        <CustomCard
          component={motion.div}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.4 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
        >
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5">
                {name}
              </Typography>

              <PersonStats>
                {Object.entries(restPerson)
                  .filter(([_, value]) => typeof value === "string")
                  .map(([key, value]) => {
                    return (
                      <PersonStat key={key}>
                        <KeyWrapper variant="caption">
                          {snakeCaseToWords(key)}:
                        </KeyWrapper>

                        <Typography variant="caption">
                          {value.length > 10
                            ? `${value.slice(0, 10)}...`
                            : value}
                        </Typography>
                      </PersonStat>
                    );
                  })}
              </PersonStats>
            </CardContent>
          </CardActionArea>
        </CustomCard>
      </Link>
    </AnimatePresence>
  );
};
