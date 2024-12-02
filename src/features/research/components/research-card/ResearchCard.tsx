"use client";

import { Skeleton } from "@/design-system/atoms/skeleton/Skeleton";
import { Typography } from "@mui/material";
import { ReactNode } from "react";
import { ResearchData } from "../../research.types";
import { Container, DraftBadge, FieldBadge, Header } from "./ResearchCard.styles";

interface ResearchCardProps {
  loading?: boolean;
  research?: ResearchData;
  children?: ReactNode;
}

export function ResearchCard({
  loading = false,
  research = undefined,
  children = undefined,
}: ResearchCardProps) {
  return (
    <Container>
      <Header>
        <Typography component="p" variant="overline">
          {loading ? (
            <Skeleton width="50%" />
          ) : (
            <>
              {research?.status}
              {
                {
                  "Em Campo": <FieldBadge />,
                  Rascunho: <DraftBadge />,
                }[research?.status ?? "Em Campo"]
              }
            </>
          )}
        </Typography>
        <Typography
          variant="subtitle1"
          color={research?.status === "Rascunho" ? "textSecondary" : "textPrimary"}
        >
          {loading ? <Skeleton width="80%" /> : research?.name}
        </Typography>
      </Header>

      {children}
    </Container>
  );
}
