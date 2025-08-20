import { Box, FormControl, styled } from "@mui/material";

export const SearchFormControl = styled(FormControl)`
  max-width: 800px;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  margin-bottom: 32px;
`;

export const PaginationWrapper = styled(Box)`
  display: flex;
  justify-content: center;
`;
