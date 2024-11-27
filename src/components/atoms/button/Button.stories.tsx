import { Favorite } from "@mui/icons-material";
import Box from "@mui/material/Box";
import { Meta, StoryFn } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "Design System/Atoms/Button",
  component: Button,
} as Meta<typeof Button>;

export const Default: StoryFn<typeof Button> = (args) => {
  return <Button {...args} />;
};
Default.args = {
  startIcon: Favorite,
  endIcon: Favorite,
  children: "Lorem ipsum",
};

export const Variants: StoryFn<typeof Button> = (args) => {
  return (
    <Box sx={{ display: "flex", gap: "1rem" }}>
      <Button {...args} variant="contained">
        Contained
      </Button>
      <Button {...args} variant="outlined">
        Outlined
      </Button>
      <Button {...args} variant="text">
        Text
      </Button>
    </Box>
  );
};
Variants.args = {
  endIcon: Favorite,
};

export const Sizes: StoryFn<typeof Button> = (args) => {
  return (
    <Box sx={{ display: "flex", gap: "1rem" }}>
      <Button {...args} size="small">
        Small
      </Button>
      <Button {...args} size="medium">
        Medium
      </Button>
      <Button {...args} size="large">
        Large
      </Button>
    </Box>
  );
};
Sizes.args = {
  endIcon: Favorite,
};

export const Colors: StoryFn<typeof Button> = (args) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "fit-content",
      }}
    >
      <Button {...args} color="primary">
        Primary
      </Button>
      <Button {...args} color="primaryAlt">
        Primary Alt
      </Button>
      <Button {...args} color="secondary">
        Secondary
      </Button>
      <Button {...args} color="tertiary">
        Tertiary
      </Button>
      <Button {...args} color="info">
        Info
      </Button>
      <Button {...args} color="success">
        Success
      </Button>
      <Button {...args} color="warning">
        Warning
      </Button>
      <Button {...args} color="error">
        Error
      </Button>
    </Box>
  );
};
Colors.args = {
  endIcon: Favorite,
};

export const IconButton: StoryFn<typeof Button> = (args) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Button {...args} variant="contained" size="large" />
        <Button {...args} variant="contained" size="medium" />
        <Button {...args} variant="contained" size="small" />
      </Box>
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Button {...args} variant="outlined" size="large" />
        <Button {...args} variant="outlined" size="medium" />
        <Button {...args} variant="outlined" size="small" />
      </Box>
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Button {...args} variant="text" size="large" />
        <Button {...args} variant="text" size="medium" />
        <Button {...args} variant="text" size="small" />
      </Box>
    </Box>
  );
};
IconButton.args = {
  startIcon: Favorite,
};
