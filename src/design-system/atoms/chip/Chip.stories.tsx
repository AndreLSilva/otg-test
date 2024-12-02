import { Box } from "@mui/material";
import { Meta, StoryFn } from "@storybook/react";
import { Chip } from "./Chip";

export default {
  title: "Design System/Atoms/Chip",
  component: Chip,
} as Meta<typeof Chip>;

export const Default: StoryFn<typeof Chip> = (args) => {
  return <Chip {...args} />;
};
Default.args = {
  color: "info",
  children: "Lorem Ipsum",
};

export const Colors: StoryFn<typeof Chip> = (args) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "fit-content",
      }}
    >
      <Chip {...args} color="primary">
        Primary
      </Chip>
      <Chip {...args} color="primaryAlt">
        Primary Alt
      </Chip>
      <Chip {...args} color="secondary">
        Secondary
      </Chip>
      <Chip {...args} color="tertiary">
        Tertiary
      </Chip>
      <Chip {...args} color="default">
        Default
      </Chip>
      <Chip {...args} color="info">
        Info
      </Chip>
      <Chip {...args} color="success">
        Success
      </Chip>
      <Chip {...args} color="warning">
        Warning
      </Chip>
      <Chip {...args} color="error">
        Error
      </Chip>
    </Box>
  );
};
