"use client";

import { ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import { defaultTheme } from "./theme/theme";

interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
}
