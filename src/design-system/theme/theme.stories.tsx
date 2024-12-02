import { Box, Card, PaletteColor, Typography } from "@mui/material";
import { Meta, StoryFn } from "@storybook/react";
import { defaultTheme } from "./theme";

export default {
  title: "Design System/Theme",
} as Meta;

interface CardPreviewProps {
  label: string;
  paletteColor?: PaletteColor;
  color?: string;
  background?: string;
}

function CardPreview({
  label,
  paletteColor = defaultTheme.palette.secondary,
  color = undefined,
  background = undefined,
}: CardPreviewProps) {
  const main = background ?? paletteColor.main;
  return (
    <Card
      sx={{
        width: "8rem",
        height: "8rem",
        padding: "0.5rem",
        color: color ?? paletteColor.contrastText,
        background: main,
      }}
    >
      <Typography variant="body1">{label}</Typography>
      <Typography variant="overline">{main}</Typography>
    </Card>
  );
}

export const Colors: StoryFn = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Typography variant="h6">Background</Typography>
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <CardPreview
          label="Default"
          background={defaultTheme.palette.background.default}
        />
        <CardPreview
          label="Paper"
          background={defaultTheme.palette.background.paper}
        />
        <CardPreview
          label="Divider"
          background={defaultTheme.palette.divider}
        />
      </Box>

      <Typography variant="h6">Primary</Typography>
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <CardPreview
          label="Primary"
          paletteColor={defaultTheme.palette.primary}
        />
        <CardPreview
          label="Tertiary"
          paletteColor={defaultTheme.palette.primaryAlt}
        />
        <CardPreview
          label="Secondary"
          paletteColor={defaultTheme.palette.secondary}
        />
        <CardPreview
          label="Tertiary"
          paletteColor={defaultTheme.palette.tertiary}
        />
      </Box>

      <Typography variant="h6">Status</Typography>
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <CardPreview label="Info" paletteColor={defaultTheme.palette.info} />
        <CardPreview
          label="Success"
          paletteColor={defaultTheme.palette.success}
        />
        <CardPreview
          label="Warning"
          paletteColor={defaultTheme.palette.warning}
        />
        <CardPreview label="Error" paletteColor={defaultTheme.palette.error} />
      </Box>

      <Typography variant="h6">Text</Typography>
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <CardPreview
          label="Primary"
          color={defaultTheme.palette.primary.contrastText}
          background={defaultTheme.palette.text.primary}
        />
        <CardPreview
          label="Secondary"
          background={defaultTheme.palette.text.secondary}
        />
        <CardPreview
          label="Disabled"
          background={defaultTheme.palette.text.disabled}
        />
      </Box>
    </Box>
  );
};
