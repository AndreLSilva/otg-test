import { Paper } from "@/components/atoms/paper/Paper";
import { styled } from "@mui/material";

export const Container = styled(Paper)(({ theme }) => ({
  textAlign: "center",

  [theme.breakpoints.up("md")]: {
    flexShrink: 0,
    width: "21.375rem",
  },
}));
