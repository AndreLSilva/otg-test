import { Box, styled } from "@mui/material";

export const Container = styled(Box)(() => ({
  position: "relative",

  borderRadius: "0.375rem",
  paddingBottom: "1.375rem",
}));

export const Content = styled(Box)(() => ({
  height: "100%",
  overflow: "hidden",

  border: "solid 0.125rem",
  borderRadius: "0.375rem",

  color: "text.primary",
  backgroundColor: "background.paper",
}));
