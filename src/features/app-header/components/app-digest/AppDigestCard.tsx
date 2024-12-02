import { Skeleton } from "@/design-system/atoms/skeleton/Skeleton";
import { Typography } from "@mui/material";
import { ReactNode } from "react";
import { Card } from "./AppDigest.styles";

interface AppDigestCardProps {
  loading?: boolean;
  titlePrimary?: string | number;
  titleSecondary?: string | number;
  description: string;
  children?: ReactNode;
}

export function AppDigestCard({
  loading = false,
  titlePrimary = undefined,
  titleSecondary = undefined,
  description,
  children = undefined,
}: AppDigestCardProps) {
  return (
    <Card color="primary">
      <Typography component="p" variant="h3">
        {loading ? (
          <Skeleton color="primaryAlt" width="5.25rem" />
        ) : (
          <>
            {titlePrimary}
            {titleSecondary && (
              <Typography
                component="span"
                variant="subtitle1"
                color="textSecondary"
                fontWeight="400"
              >
                /{titleSecondary}
              </Typography>
            )}
          </>
        )}
      </Typography>
      <Typography
        sx={{ whiteSpace: "pre-line" }}
        variant="body2"
        color="textSecondary"
        textTransform="uppercase"
      >
        {loading ? (
          <>
            <Skeleton color="primaryAlt" width="4.25rem" />
            <Skeleton color="primaryAlt" width="2.25rem" />
          </>
        ) : (
          description
        )}
      </Typography>

      <div>{children}</div>
    </Card>
  );
}
