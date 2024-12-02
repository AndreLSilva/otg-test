"use client";

import { useAppDigest } from "@/features/app-digest/hooks/useAppDigest";
import { AudienceDigestCard } from "@/features/research/components/audience-digest-card/AudienceDigestCard";
import { CreditsDigestCard } from "@/features/research/components/credits-digest-card/CreditsDigestCard";
import { DropsDigestCard } from "@/features/research/components/drops-digest-card/DropsDigestCard";
import { ResearchCard } from "@/features/research/components/research-card/ResearchCard";
import { ResearchViewAllCard } from "@/features/research/components/view-all-card/ViewAllCard";
import { Typography } from "@mui/material";
import { PageContainer, ResearchesCarousel } from "./authenticated.styles";

export default function Home() {
  const { isLoadingAppDigest, appDigest } = useAppDigest();

  return (
    <PageContainer>
      <Typography sx={{ marginBottom: "-1.375rem" }} variant="h6">
        Minhas Pesquisas
      </Typography>
      <ResearchesCarousel spacing={1.25} hideButtonBreakpoint="sm">
        {appDigest?.researches.myresearches.map((research) => (
          <ResearchCard key={research.id} research={research} />
        ))}
        <ResearchViewAllCard />
      </ResearchesCarousel>

      <CreditsDigestCard />

      <AudienceDigestCard />
      <DropsDigestCard />
    </PageContainer>
  );
}
