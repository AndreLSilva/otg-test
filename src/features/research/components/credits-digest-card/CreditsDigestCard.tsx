"use client";

import { Button } from "@/design-system/atoms/button/Button";
import { Card } from "@/design-system/atoms/card/Card";
import { Paper } from "@/design-system/atoms/paper/Paper";
import { Skeleton } from "@/design-system/atoms/skeleton/Skeleton";
import { useAppDigest } from "@/features/app-digest/hooks/useAppDigest";
import { formatNumber } from "@/utils/number.utils";
import { Typography } from "@mui/material";
import { CardContent, Content } from "./CreditsDigestCard.styles";

interface CreditsDigestCardProps {
  className?: string;
}

export function CreditsDigestCard({ className = undefined }: CreditsDigestCardProps) {
  const { isLoadingAppDigest, appDigest } = useAppDigest();

  return (
    <Paper className={className} variant="outlined" color="primaryAlt">
      <Paper.Header title="Créditos para painel" />

      <Content>
        <Card color="tertiary" padding="1rem">
          <CardContent>
            <Typography variant="h2">
              {isLoadingAppDigest ? <Skeleton /> : formatNumber(appDigest?.credits.available)}
            </Typography>
            <Typography variant="overline">
              Créditos
              <br />
              disponíveis
            </Typography>
          </CardContent>
        </Card>
        <Card color="secondary" padding="1rem" fullWidth>
          <CardContent>
            <Typography variant="h2">
              {isLoadingAppDigest ? <Skeleton /> : formatNumber(appDigest?.credits.running)}
            </Typography>
            <Typography variant="caption" textTransform="uppercase">
              Créditos
              <br />
              em campo
            </Typography>
          </CardContent>
        </Card>
        {/* TODO: Change color */}
        <Card color="primary" padding="1rem" fullWidth>
          <CardContent>
            <Typography variant="h2">
              {isLoadingAppDigest ? <Skeleton /> : formatNumber(appDigest?.credits.reserved)}
            </Typography>
            <Typography variant="caption" textTransform="uppercase">
              Créditos
              <br />
              reservados
            </Typography>
          </CardContent>
        </Card>

        <Button variant="outlined" fullWidth>
          Gerenciar créditos
        </Button>
      </Content>
    </Paper>
  );
}
