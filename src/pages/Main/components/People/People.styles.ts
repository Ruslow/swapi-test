import { Box, styled } from "@mui/material";

export const LoaderWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 91vh;
`;

export const CenterWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  gap: 16px;
`;

export const PeopleWrapper = styled(Box)`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 90vh;
`;
