import { Box, styled } from "@mui/material";

export const Container = styled(Box)({
  height: "0.75rem",
  border: "solid 0.0625rem",
  borderRadius: "0.75rem",

  "& > :only-child": {
    height: "100%",
    borderRadius: "0.75rem",

    transition: "width ease-in-out 1s",
  },
});
