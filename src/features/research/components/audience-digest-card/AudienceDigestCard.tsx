"use client";

import { Button } from "@/components/atoms/button/Button";
import { Paper } from "@/components/atoms/paper/Paper";
import { ArrowForward, FolderShared } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Content } from "./AudienceDigestCard.styles";

export function AudienceDigestCard() {
  return (
    <Paper color="primaryAlt" variant="outlined">
      <Paper.Header title="Audiência" icon={FolderShared} border />
      <Content>
        <div>
          <Typography variant="h2">0.000</Typography>
          <Typography variant="body2">Contatos</Typography>
        </div>

        <Button variant="outlined" startIcon={ArrowForward} />
      </Content>
    </Paper>
  );
}
