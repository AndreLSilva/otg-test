import { SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";
import { Container, Content } from "./Card.styles";

interface CardProps {
  sx?: SxProps<Theme>;
  color?: CardColors;
  children?: ReactNode;
}

export type CardColors = "primary" | "secondary" | "tertiary";

export function Card({ color = "primary", children = undefined }: CardProps) {
  return (
    <Container sx={{ backgroundColor: `${color}.main` }}>
      <Content sx={{ borderColor: `${color}.main` }}>{children}</Content>
    </Container>
  );
}
