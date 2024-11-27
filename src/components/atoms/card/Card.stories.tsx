import Typography from "@mui/material/Typography";
import { Meta, StoryFn } from "@storybook/react";
import { Card } from "./Card";

export default {
  title: "Design System/Atoms/Card",
  component: Card,
} as Meta<typeof Card>;

export const Default: StoryFn<typeof Card> = (args) => {
  return <Card {...args} />;
};
Default.args = {
  children: (
    <Typography sx={{ padding: "1rem" }}>
      Adipisicing consectetur reprehenderit tempor ullamco dolor occaecat duis
      magna veniam et. Proident aliquip consectetur deserunt id ullamco eiusmod
      nulla deserunt anim elit do reprehenderit velit aute. Labore cupidatat
      aliquip consectetur ex ea. Laboris labore minim voluptate proident
      consequat incididunt. Nostrud sint cillum consectetur eiusmod incididunt
      commodo pariatur velit aliquip ipsum labore esse id exercitation.
    </Typography>
  ),
};
