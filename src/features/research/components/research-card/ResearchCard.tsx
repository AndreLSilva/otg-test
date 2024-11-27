"use client";

import { Card } from "@/components/atoms/card/Card";
import { StarsIcon } from "@/components/atoms/icons/StarsIcon";
import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import { Research } from "../../research.types";
import { researchCardStyles } from "./ResearchCard.styles";

interface ResearchCardProps {
  research: Research;
  children?: ReactNode;
}

export function ResearchCard({
  research: { name, status },
  children = undefined,
}: ResearchCardProps) {
  return (
    <Card sx={researchCardStyles.container}>
      <Box sx={researchCardStyles.header}>
        <Typography variant="overline">
          {status}
          {
            {
              "Em Campo": <Box sx={researchCardStyles.fieldBadge} />,
              Rascunho: <Box component={StarsIcon} sx={researchCardStyles.draftBadge} />,
            }[status]
          }
        </Typography>
        <Typography
          variant="subtitle1"
          color={status === "Rascunho" ? "textSecondary" : "textPrimary"}
        >
          {name}
        </Typography>
      </Box>

      {children}
    </Card>
  );
}
