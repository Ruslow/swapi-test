import { Box, TextField, styled } from "@mui/material";

export const ContentWrapper = styled(Box)`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const TextInput = styled(TextField)`
  max-width: 160px;
  margin: 0;
`;

export const KeyValueWrapper = styled(Box)`
  display: flex;
  gap: 10px;
  width: 200px;
  height: 40px;
  align-items: center;
`;
