import { Box, styled } from "@mui/material";

export const Container = styled(Box)`
  position: relative;

  border-radius: 0.375rem;
  padding-bottom: 1.375rem;
`;

export const Content = styled(Box)`
  height: 100%;
  overflow: hidden;

  border: solid 0.125rem;
  border-radius: 0.375rem;

  color: ${({ theme }) => theme.palette.primary.main};
  background: ${({ theme }) => theme.palette.background.paper};
`;
