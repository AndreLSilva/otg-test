import { Meta, StoryFn } from "@storybook/react";
import { CallToActionCard } from "./CallToActionCard";

export default {
  title: "Features/App Header/Call to Action Card",
  component: CallToActionCard,
} as Meta<typeof CallToActionCard>;

export const Default: StoryFn<typeof CallToActionCard> = () => {
  return <CallToActionCard />;
};
