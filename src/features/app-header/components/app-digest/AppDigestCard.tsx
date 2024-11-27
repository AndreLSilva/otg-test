import { Typography } from "@mui/material";
import { ReactNode } from "react";
import { Card } from "./AppDigest.styles";

interface AppDigestCardProps {
  titlePrimary: string;
  titleSecondary?: string;
  description: string;
  children?: ReactNode;
}

export function AppDigestCard({
  titlePrimary,
  titleSecondary = undefined,
  description,
  children = undefined,
}: AppDigestCardProps) {
  return (
    <Card color="primary">
      <Typography component="p" variant="h4">
        {titlePrimary}
        {titleSecondary && (
          <Typography component="span" variant="subtitle1" color="textSecondary" fontWeight="400">
            /{titleSecondary}
          </Typography>
        )}
      </Typography>
      <Typography
        sx={{ whiteSpace: "pre-line" }}
        variant="body2"
        color="textSecondary"
        textTransform="uppercase"
      >
        {description}
      </Typography>

      <div>{children}</div>
    </Card>
  );
}
