import { Box, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "0.875rem",

  paddingLeft: "0.875rem",
  paddingRight: "0.875rem",
  paddingTop: "1.375rem",
  paddingBottom: "3.75rem",

  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },

  "& > :first-child": {
    width: "100%",
  },
}));
