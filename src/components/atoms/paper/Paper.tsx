import { PaperProps as MUIPaperProps } from "@mui/material";
import { ReactNode } from "react";
import { Container } from "./Paper.styles";

interface PaperProps {
  className?: string;
  color?: PaperColor;
  variant?: MUIPaperProps["variant"];
  elevation?: number;
  children?: ReactNode;
}

export type PaperColor = "primary" | "primaryAlt" | "secondary" | "tertiary";

export function Paper({
  className = undefined,
  color = "primary",
  variant = "elevation",
  elevation = 0,
  children = undefined,
}: PaperProps) {
  return (
    <Container
      className={className}
      sx={{
        color: `${color}.contrastText`,
        backgroundColor: `${color}.light`,
      }}
      variant={variant}
      elevation={elevation}
    >
      {children}
    </Container>
  );
}
