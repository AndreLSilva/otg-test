"use client";

import { AppDigest } from "../app-digest/AppDigest";
import { CallToActionCard } from "../call-to-action-card/CallToActionCard";
import { Container } from "./AppHero.styles";

interface AppHeroProps {
  className?: string;
}

export function AppHero({ className = undefined }: AppHeroProps) {
  return (
    <Container className={className}>
      <div>
        <AppDigest />
      </div>

      <CallToActionCard />
    </Container>
  );
}
