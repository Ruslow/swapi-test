import { Box, Card, Typography, styled, type CardProps } from "@mui/material";
import type { HTMLMotionProps } from "motion/react";

export const CustomCard = styled(Card)<CardProps & HTMLMotionProps<"div">>`
  width: 345px;
  height: 153px;
`;

export const KeyWrapper = styled(Typography)`
  font-weight: 600;
`;

export const PersonStats = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0px 5px;
`;

export const PersonStat = styled(Box)`
  display: flex;
  align-items: center;
  gap: 5px;
`;
