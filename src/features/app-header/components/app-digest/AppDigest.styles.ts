import { Paper } from "@/components/atoms/paper/Paper";
import { Grid2, styled } from "@mui/material";

export const Container = styled(Grid2)(({ theme }) => ({
  margin: "0 auto",

  [theme.breakpoints.up("md")]: {
    maxWidth: "45.75rem",
  },
}));

export const Card = styled(Paper)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "0.375rem",

  height: "10.6875rem",

  "& > :last-child": {
    marginTop: "auto",
  },
}));
