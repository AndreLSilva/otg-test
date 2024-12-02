"use client";

import { queryClient } from "@/features/backend-api/backend-config";
import { GlobalStyles, ThemeProvider } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { defaultTheme } from "./theme/theme";

interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>

      <GlobalStyles
        styles={(theme) => ({
          body: { backgroundColor: theme.palette.background.default },
        })}
      />
    </ThemeProvider>
  );
}
