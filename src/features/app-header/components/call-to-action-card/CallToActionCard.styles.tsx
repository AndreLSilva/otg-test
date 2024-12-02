import { Paper } from "@/design-system/atoms/paper/Paper";
import { styled } from "@mui/material";

export const Container = styled(Paper)`
  align-items: center;
  padding: 0.875rem 1.625rem 1.625rem 1.625rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    flex-shrink: 0;
    width: 21.375rem;
  }
`;
