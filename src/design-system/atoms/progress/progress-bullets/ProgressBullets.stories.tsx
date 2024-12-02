import { Box } from "@mui/material";
import { Meta, StoryFn } from "@storybook/react";
import { ProgressBullets } from "./ProgressBullets";

export default {
  title: "Design System/Atoms/Progress/Progress Bullets",
  component: ProgressBullets,
} as Meta<typeof ProgressBullets>;

export const Default: StoryFn<typeof ProgressBullets> = (args) => {
  return <ProgressBullets {...args} />;
};
Default.args = {
  total: 10,
  progress: 4,
  color: "primary",
};

export const Colors: StoryFn<typeof ProgressBullets> = (args) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "fit-content",
      }}
    >
      <ProgressBullets {...args} color="primary" />
      <ProgressBullets {...args} color="primaryAlt" />
      <ProgressBullets {...args} color="secondary" />
      <ProgressBullets {...args} color="tertiary" />
    </Box>
  );
};
Colors.args = {
  total: 10,
  progress: 6,
};
