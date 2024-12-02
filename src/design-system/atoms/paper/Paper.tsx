"use client";

import { PaperProps as MUIPaperProps } from "@mui/material";
import { ReactNode } from "react";
import { Container } from "./Paper.styles";
import { PaperHeader } from "./PaperHeader";

interface PaperProps {
  className?: string;
  color?: PaperColor;
  variant?: MUIPaperProps["variant"];
  elevation?: number;
  square?: boolean;
  children?: ReactNode;
}

export type PaperColor = "primary" | "primaryAlt" | "secondary" | "tertiary";

export function Paper({
  className = undefined,
  color = "primary",
  variant = "elevation",
  elevation = 0,
  square = false,
  children = undefined,
}: PaperProps) {
  return (
    <Container
      className={className}
      variant={variant}
      elevation={elevation}
      square={square}
      color={color}
    >
      {children}
    </Container>
  );
}

Paper.Header = PaperHeader;
