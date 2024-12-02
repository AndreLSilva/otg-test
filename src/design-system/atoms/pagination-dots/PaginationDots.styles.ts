import { styled } from "@mui/material";

interface DotProps {
  selected: boolean;
}

export const Container = styled("div")`
  display: flex;
  gap: 0.375rem;
`;

export const Dot = styled("button")<DotProps>`
  width: 0.75rem;
  height: 0.75rem;

  border-radius: 0.75rem;

  background: ${({ selected, theme }) =>
    selected ? theme.palette.primary.main : theme.palette.divider};
`;
