import { ProgressBar } from "@/components/atoms/progress/progress-bar/ProgressBar";
import { Grid2, Typography } from "@mui/material";
import { Container } from "./AppDigest.styles";
import { AppDigestCard } from "./AppDigestCard";

export function AppDigest() {
  return (
    <Container container columns={{ xs: 2, md: 3 }} spacing="0.875rem">
      <Grid2 size={{ xs: 2, md: 3 }}>
        <Typography variant="caption" sx={{ textTransform: "uppercase" }}>
          Resumo mensal
        </Typography>
        <Typography variant="h5">Novembro, 2025</Typography>
      </Grid2>

      <Grid2 size={1}>
        {/* TODO: Progress steps */}
        <AppDigestCard titlePrimary="0" titleSecondary="0" description={"pesquisas\nem campo"} />
      </Grid2>
      <Grid2 size={1}>
        <AppDigestCard titlePrimary="000" description="pesquisas em roteirização" />
      </Grid2>
      <Grid2 size={{ xs: 2, md: 1 }}>
        <AppDigestCard
          titlePrimary="0.000"
          titleSecondary="00.000"
          description={"disparos\nfeitos"}
        >
          <ProgressBar color="primaryAlt" progress={0.4} />
        </AppDigestCard>
      </Grid2>
    </Container>
  );
}
