"use client";

import { Button } from "@/components/atoms/button/Button";
import { Card } from "@/components/atoms/card/Card";
import { Flex } from "@/components/atoms/flex/Flex";
import { Paper } from "@/components/atoms/paper/Paper";
import { Typography } from "@mui/material";
import { CardContent, Container, Content } from "./CreditsDigestCard.styles";

export function CreditsDigestCard() {
  return (
    <Container variant="outlined" color="primaryAlt">
      <Paper.Header title="Créditos para painel" />

      <Content>
        <Card color="tertiary" padding="1rem">
          <CardContent>
            <Typography variant="h3">0.000</Typography>
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
              <Typography variant="h4">000</Typography>
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
              <Typography variant="h4">000</Typography>
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
