import { ReactNode } from "react";
import { Container, Content } from "./Card.styles";

interface CardProps {
  className?: string;
  color?: CardColors;
  children?: ReactNode;
}

export type CardColors = "primary" | "secondary" | "tertiary";

export function Card({
  className = undefined,
  color = "primary",
  children = undefined,
}: CardProps) {
  return (
    <Container className={className} sx={{ backgroundColor: `${color}.main` }}>
      <Content sx={{ borderColor: `${color}.main` }}>{children}</Content>
    </Container>
  );
}
