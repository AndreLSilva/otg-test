"use client";

import { Box } from "@mui/material";
import { AppDigest } from "../app-digest/AppDigest";
import { CallToActionCard } from "../call-to-action-card/CallToActionCard";
import { Container } from "./AppHero.styles";

export function AppHero() {
  return (
    <Container>
      <Box>
        <AppDigest />
      </Box>

      <CallToActionCard />
    </Container>
  );
}
