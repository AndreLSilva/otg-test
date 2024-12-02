"use client";

import { ReactNode } from "react";
import { Container, Content } from "./Card.styles";

interface CardProps {
  className?: string;
  color?: CardColors;
  padding?: number | string;
  fullWidth?: boolean;
  children?: ReactNode;
}

export type CardColors = "primary" | "secondary" | "tertiary";

export function Card({
  className = undefined,
  color = "primary",
  padding = undefined,
  fullWidth = false,
  children = undefined,
}: CardProps) {
  return (
    <Container className={className} color={color} fullWidth={fullWidth}>
      <Content color={color} padding={padding}>
        {children}
      </Content>
    </Container>
  );
}
