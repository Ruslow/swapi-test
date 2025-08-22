import { Box, styled } from "@mui/material";

export const LoaderWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80.1vh;
  margin-bottom: 20px;
`;

export const CenterWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 82.5vh;
  flex-direction: column;
  gap: 16px;
`;

export const PeopleWrapper = styled(Box)`
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 80vh;
  margin-bottom: 20px;
`;
