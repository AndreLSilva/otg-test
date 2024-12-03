import { styled } from "@mui/material";

export const Content = styled("div")`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;

  width: 100%;
  height: fit-content;

  margin: auto;
  padding: 1rem 1.25rem;

  & > div:first-of-type {
    grid-column: span 2;
  }

  & > button {
    grid-column: span 2;
  }

  ${({ theme }) => theme.breakpoints.up("sm")} {
    max-width: 17.25rem;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 12.375rem min-content;

    max-width: 33rem;

    & > div:first-of-type {
      grid-column: span 1;
    }

    & > button {
      grid-column: span 3;
    }
  }
`;

export const CardContent = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  width: 100%;
  height: 100%;
`;
