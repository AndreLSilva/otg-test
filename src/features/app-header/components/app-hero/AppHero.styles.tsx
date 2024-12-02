import { styled } from "@mui/material";

export const Container = styled("div")`
  display: flex;
  flex-direction: column;

  padding: 5.375rem 0 2.375rem 0;

  color: ${({ theme }) => theme.palette.primary.contrastText};
  background: ${({ theme }) => theme.palette.primary.main};

  ${({ theme }) => theme.breakpoints.up("md")} {
    flex-direction: row;
  }

  & > :first-of-type {
    padding: 0 0.875rem;
    width: 100%;
  }

  & > :last-of-type {
    margin: 1.3125rem 0.875rem 0 0.875rem;

    ${({ theme }) => theme.breakpoints.up("md")} {
      margin: 0 0.875rem 0 0;
    }

    ${({ theme }) => theme.breakpoints.up("lg")} {
      margin: 0 1.3125rem;
    }
  }
`;
