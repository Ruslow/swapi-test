import { Box, Typography, styled } from "@mui/material";

export const ContentWrapper = styled(Box)`
  display: grid;
  place-items: center;
`;

export const LoaderWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 32px);
`;

export const ErrorWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 32px);
  flex-direction: column;
  gap: 16px;
`;

export const ButtonsWrapper = styled(Box)`
  display: flex;
  gap: 4px;
`;

export const Title = styled(Typography)`
  margin-bottom: 10px;
  text-align: center;
`;

export const PeopleList = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
`;
