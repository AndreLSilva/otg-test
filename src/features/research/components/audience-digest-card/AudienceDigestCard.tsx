"use client";

import { Button } from "@/design-system/atoms/button/Button";
import { Paper } from "@/design-system/atoms/paper/Paper";
import { Skeleton } from "@/design-system/atoms/skeleton/Skeleton";
import { useAppDigest } from "@/features/app-digest/hooks/useAppDigest";
import { formatNumber } from "@/utils/number.utils";
import { ArrowForward, FolderShared } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Content } from "./AudienceDigestCard.styles";

export function AudienceDigestCard() {
  const { isLoadingAppDigest, appDigest } = useAppDigest();

  return (
    <Paper color="primaryAlt" variant="outlined">
      <Paper.Header title="Audiência" icon={FolderShared} border />
      <Content>
        <div>
          <Typography variant="h2">
            {isLoadingAppDigest ? (
              <Skeleton width="8rem" />
            ) : (
              formatNumber(appDigest?.audience.contacts)
            )}
          </Typography>
          <Typography variant="body2">Contatos</Typography>
        </div>

        <Button variant="outlined" startIcon={ArrowForward} />
      </Content>
    </Paper>
  );
}
