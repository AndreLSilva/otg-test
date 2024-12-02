import { ProgressBar } from "@/design-system/atoms/progress/progress-bar/ProgressBar";
import { ProgressBullets } from "@/design-system/atoms/progress/progress-bullets/ProgressBullets";
import { useAppDigest } from "@/features/app-digest/hooks/useAppDigest";
import { formatNumber, parseNumber } from "@/utils/number.utils";
import { Grid2, Typography } from "@mui/material";
import { Container } from "./AppDigest.styles";
import { AppDigestCard } from "./AppDigestCard";

export function AppDigest() {
  const { isLoadingAppDigest, appDigest } = useAppDigest();

  const runningCurrent = parseNumber(appDigest?.researches.running.split("/")[0], 0);
  const runningTotal = parseNumber(appDigest?.researches.running.split("/")[1], 0);

  return (
    <Container container columns={{ xs: 2, sm: 3 }} spacing="0.875rem">
      <Grid2 size={{ xs: 2, sm: 3 }}>
        <Typography variant="caption" sx={{ textTransform: "uppercase" }}>
          Resumo mensal
        </Typography>
        <Typography variant="h5">Novembro, 2025</Typography>
      </Grid2>

      <Grid2 size={1}>
        {/* TODO: Progress steps */}
        <AppDigestCard
          loading={isLoadingAppDigest}
          titlePrimary={formatNumber(runningCurrent)}
          titleSecondary={formatNumber(runningTotal)}
          description={"pesquisas\nem campo"}
        >
          <ProgressBullets total={runningTotal} progress={runningCurrent} color="primaryAlt" />
        </AppDigestCard>
      </Grid2>
      <Grid2 size={1}>
        <AppDigestCard
          loading={isLoadingAppDigest}
          titlePrimary={formatNumber(appDigest?.researches.scripting)}
          description="pesquisas em roteirização"
        />
      </Grid2>
      <Grid2 size={{ xs: 2, sm: 1 }}>
        <AppDigestCard
          loading={isLoadingAppDigest}
          titlePrimary={formatNumber(appDigest?.audience.sended)}
          titleSecondary={formatNumber(appDigest?.audience.balance)}
          description={"disparos\nfeitos"}
        >
          <ProgressBar
            color="primaryAlt"
            progress={appDigest ? appDigest.audience.sended / appDigest.audience.balance : 0}
          />
        </AppDigestCard>
      </Grid2>
    </Container>
  );
}
