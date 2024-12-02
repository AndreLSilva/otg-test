import { Paper } from "@/design-system/atoms/paper/Paper";
import { Grid2, styled } from "@mui/material";

export const Container = styled(Grid2)`
  margin: 0 auto;

  ${({ theme }) => theme.breakpoints.up("md")} {
    max-width: 45.75rem;
  }
`;

export const Card = styled(Paper)`
  height: 10.6875rem;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;

  padding: 1.375rem;

  /* Children container */
  & > div {
    margin-top: auto;
  }
`;
