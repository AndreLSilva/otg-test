"use client";

import { Button } from "@/components/atoms/button/Button";
import { Paper } from "@/components/atoms/paper/Paper";
import { Mail } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Actions, Content } from "./DropsDigestCard.styles";

export function DropsDigestCard() {
  return (
    <Paper color="primaryAlt" variant="outlined">
      <Paper.Header title="Disparos" icon={Mail} border />
      <Content>
        <Typography variant="h2">
          0.000
          <Typography component="span" variant="h6" color="textSecondary" fontWeight="400">
            /0.000
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
