import { Meta, StoryFn } from "@storybook/react";
import { AppDigest } from "./AppDigest";
import { AppDigestCard } from "./AppDigestCard";

export default {
  title: "Features/App Header/App Digest",
  component: AppDigest,
} as Meta<typeof AppDigest>;

export const Default: StoryFn<typeof AppDigest> = () => {
  return <AppDigest />;
};

export const Card: StoryFn<typeof AppDigestCard> = (args) => {
  return <AppDigestCard {...args} />;
};
Card.args = {
  loading: false,
  titlePrimary: "4",
  titleSecondary: "10",
  description: "Lorem\nIpsum",
};
