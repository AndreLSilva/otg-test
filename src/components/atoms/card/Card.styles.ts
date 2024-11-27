import { SxProps, Theme } from "@mui/material";
import { CardColors } from "./Card";

const container = (color: CardColors): SxProps<Theme> => ({
  position: "relative",

  borderRadius: "0.375rem",
  paddingBottom: "1.375rem",

  backgroundColor: `${color}.main`,
});

const content = (color: CardColors): SxProps => ({
  height: "100%",
  overflow: "hidden",

  border: "solid 0.125rem",
  borderColor: `${color}.main`,
  borderRadius: "0.375rem",

  backgroundColor: "background.paper",
});

export const cardStyles = { container, content };
