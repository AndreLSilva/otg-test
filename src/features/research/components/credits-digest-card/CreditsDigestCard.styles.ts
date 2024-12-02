import { Paper } from "@/components/atoms/paper/Paper";
import { styled } from "@mui/material";

export const Container = styled(Paper)``;

export const Content = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  width: 100%;
  margin: 0 auto;
  padding: 1rem 1.25rem;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    max-width: 17.25rem;
  }
`;

export const CardContent = styled("div")`
  text-align: center;
`;
