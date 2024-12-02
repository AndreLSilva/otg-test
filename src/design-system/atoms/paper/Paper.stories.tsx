import { Box } from "@mui/material";
import { Meta, StoryFn } from "@storybook/react";
import { Paper } from "./Paper";

export default {
  title: "Design System/Atoms/Paper",
  component: Paper,
} as Meta<typeof Paper>;

export const Default: StoryFn<typeof Paper> = (args) => {
  return <Paper {...args} />;
};
Default.args = {
  variant: "elevation",
  elevation: 0,
  color: "primary",
  children: "Lorem ipsum",
};

export const Variants: StoryFn<typeof Paper> = (args) => {
  return (
    <Box sx={{ display: "flex", gap: "1rem" }}>
      <Paper {...args} variant="elevation">
        Elevation variant
      </Paper>
      <Paper {...args} variant="outlined">
        Outlined variant
      </Paper>
    </Box>
  );
};
Variants.args = {
  color: "primaryAlt",
};

export const Colors: StoryFn<typeof Paper> = (args) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Paper {...args} variant="elevation" color="primary">
          Elevation primary
        </Paper>
        <Paper {...args} variant="outlined" color="primary">
          Outlined primary
        </Paper>
      </Box>
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Paper {...args} variant="elevation" color="primaryAlt">
          Elevation primary alt
        </Paper>
        <Paper {...args} variant="outlined" color="primaryAlt">
          Outlined primary alt
        </Paper>
      </Box>
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Paper {...args} variant="elevation" color="secondary">
          Elevation secondary
        </Paper>
        <Paper {...args} variant="outlined" color="secondary">
          Outlined secondary
        </Paper>
      </Box>
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Paper {...args} variant="elevation" color="tertiary">
          Elevation tertiary
        </Paper>
        <Paper {...args} variant="outlined" color="tertiary">
          Outlined tertiary
        </Paper>
      </Box>
    </Box>
  );
};
