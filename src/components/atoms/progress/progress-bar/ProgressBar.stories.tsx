import { Box } from "@mui/material";
import { Meta, StoryFn } from "@storybook/react";
import { ProgressBar } from "./ProgressBar";

export default {
  title: "Design System/Atoms/Progress/Progress Bar",
  component: ProgressBar,
} as Meta<typeof ProgressBar>;

export const Default: StoryFn<typeof ProgressBar> = (args) => {
  return <ProgressBar {...args} />;
};
Default.args = {
  progress: 0.4,
  color: "primary",
};

export const Colors: StoryFn<typeof ProgressBar> = (args) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <ProgressBar {...args} color="primary" />
      <ProgressBar {...args} color="primaryAlt" />
      <ProgressBar {...args} color="secondary" />
      <ProgressBar {...args} color="tertiary" />
    </Box>
  );
};
Colors.args = {
  progress: 0.4,
};
