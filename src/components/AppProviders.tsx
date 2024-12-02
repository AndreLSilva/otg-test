"use client";

import { GlobalStyles, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import { defaultTheme } from "./theme/theme";

interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      {children}

      <GlobalStyles
        styles={(theme) => ({
          body: { backgroundColor: theme.palette.background.default },
        })}
      />
    </ThemeProvider>
  );
}
