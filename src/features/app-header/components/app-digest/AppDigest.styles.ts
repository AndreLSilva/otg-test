import { Paper } from "@/components/atoms/paper/Paper";
import { Grid2, styled } from "@mui/material";

export const Container = styled(Grid2)(({ theme }) => ({
  margin: "0 auto",

  [theme.breakpoints.up("md")]: {
    maxWidth: "45.75rem",
  },
}));

export const Card = styled(Paper)(() => ({
  height: "10.6875rem",
}));
