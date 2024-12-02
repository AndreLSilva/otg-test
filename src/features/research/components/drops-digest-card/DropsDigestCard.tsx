"use client";

import { Button } from "@/design-system/atoms/button/Button";
import { Paper } from "@/design-system/atoms/paper/Paper";
import { useAppDigest } from "@/features/app-digest/hooks/useAppDigest";
import { formatNumber } from "@/utils/number.utils";
import { Mail } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Actions, Content } from "./DropsDigestCard.styles";

export function DropsDigestCard() {
  const { isLoadingAppDigest, appDigest } = useAppDigest();

  return (
    <Paper color="primaryAlt" variant="outlined">
      <Paper.Header title="Disparos" icon={Mail} border />
      <Content>
        <Typography variant="h2">
          {formatNumber(appDigest?.audience.sended)}
          <Typography component="span" variant="h6" color="textSecondary" fontWeight="400">
            /{formatNumber(appDigest?.audience.balance)}
          </Typography>
        </Typography>

        <Typography variant="body2">Disparos feitos</Typography>
      </Content>

      <Actions>
        <Button fullWidth>Ir para campanhas</Button>
      </Actions>
    </Paper>
  );
}
