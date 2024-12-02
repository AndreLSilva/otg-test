"use client";

import { AudienceDigestCard } from "@/features/research/components/audience-digest-card/AudienceDigestCard";
import { CreditsDigestCard } from "@/features/research/components/credits-digest-card/CreditsDigestCard";
import { DropsDigestCard } from "@/features/research/components/drops-digest-card/DropsDigestCard";
import { ResearchCard } from "@/features/research/components/research-card/ResearchCard";
import { Typography } from "@mui/material";
import { PageContainer, ResearchesCarousel } from "./authenticated.styles";

export default function Home() {
  return (
    <PageContainer>
      <Typography sx={{ marginBottom: "-1.375rem" }} variant="h6">
        Minhas Pesquisas
      </Typography>
      <ResearchesCarousel spacing={1.25} hideButtonBreakpoint="sm">
        <ResearchCard research={{ id: 1, name: "Lorem ipsum", status: "Em Campo" }} />
        <ResearchCard research={{ id: 2, name: "Lorem ipsum", status: "Rascunho" }} />
        <ResearchCard research={{ id: 3, name: "Lorem ipsum", status: "Em Campo" }} />
        <ResearchCard research={{ id: 4, name: "Lorem ipsum", status: "Em Campo" }} />
        <ResearchCard research={{ id: 5, name: "Lorem ipsum", status: "Rascunho" }} />
        <ResearchCard research={{ id: 4, name: "Lorem ipsum", status: "Em Campo" }} />
        <ResearchCard research={{ id: 5, name: "Lorem ipsum", status: "Rascunho" }} />
        <ResearchCard research={{ id: 4, name: "Lorem ipsum", status: "Em Campo" }} />
        <ResearchCard research={{ id: 5, name: "Lorem ipsum", status: "Rascunho" }} />
      </ResearchesCarousel>

      <CreditsDigestCard />

      <AudienceDigestCard />
      <DropsDigestCard />
    </PageContainer>
  );
}
