"use client";

import { Typography } from "@mui/material";
import { ReactNode } from "react";
import { Research } from "../../research.types";
import { Container, DraftBadge, FieldBadge, Header } from "./ResearchCard.styles";

interface ResearchCardProps {
  research: Research;
  children?: ReactNode;
}

export function ResearchCard({
  research: { name, status },
  children = undefined,
}: ResearchCardProps) {
  return (
    <Container>
      <Header>
        <Typography component="p" variant="overline">
          {status}
          {
            {
              "Em Campo": <FieldBadge />,
              Rascunho: <DraftBadge />,
            }[status]
          }
        </Typography>
        <Typography
          variant="subtitle1"
          color={status === "Rascunho" ? "textSecondary" : "textPrimary"}
        >
          {name}
        </Typography>
      </Header>

      {children}
    </Container>
  );
}
