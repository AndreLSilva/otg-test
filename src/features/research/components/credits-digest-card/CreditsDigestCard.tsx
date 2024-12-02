"use client";

import { Button } from "@/design-system/atoms/button/Button";
import { Card } from "@/design-system/atoms/card/Card";
import { Flex } from "@/design-system/atoms/flex/Flex";
import { Paper } from "@/design-system/atoms/paper/Paper";
import { useAppDigest } from "@/features/app-digest/hooks/useAppDigest";
import { formatNumber } from "@/utils/number.utils";
import { Typography } from "@mui/material";
import { CardContent, Container, Content } from "./CreditsDigestCard.styles";

export function CreditsDigestCard() {
  const { isLoadingAppDigest, appDigest } = useAppDigest();

  return (
    <Container variant="outlined" color="primaryAlt">
      <Paper.Header title="Créditos para painel" />

      <Content>
        <Card color="tertiary" padding="1rem">
          <CardContent>
            <Typography variant="h3">{formatNumber(appDigest?.credits.available)}</Typography>
            <Typography variant="overline">
              Créditos
              <br />
              disponíveis
            </Typography>
          </CardContent>
        </Card>
        <Flex gap="0.75rem">
          <Card color="secondary" padding="1rem" fullWidth>
            <CardContent>
              <Typography variant="h4">{formatNumber(appDigest?.credits.running)}</Typography>
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
              <Typography variant="h4">{formatNumber(appDigest?.credits.reserved)}</Typography>
              <Typography variant="caption" textTransform="uppercase">
                Créditos
                <br />
                reservados
              </Typography>
            </CardContent>
          </Card>
        </Flex>
        <Button variant="outlined" fullWidth>
          Gerenciar créditos
        </Button>
      </Content>
    </Container>
  );
}
