import { Box, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";
import { cardStyles } from "./Card.styles";

interface CardProps {
  sx?: SxProps<Theme>;
  color?: CardColors;
  children?: ReactNode;
}

export type CardColors = "primary" | "secondary" | "tertiary";

export function Card({
  sx = {},
  color = "primary",
  children = undefined,
}: CardProps) {
  return (
    <Box sx={[cardStyles.container(color), ...(Array.isArray(sx) ? sx : [sx])]}>
      <Box sx={cardStyles.content(color)}>{children}</Box>
    </Box>
  );
}
