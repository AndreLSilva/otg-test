import { Meta, StoryFn } from "@storybook/react";
import { AppHero } from "./AppHero";

export default {
  title: "Features/App Header/App Hero",
  component: AppHero,
} as Meta<typeof AppHero>;

export const Default: StoryFn<typeof AppHero> = () => {
  return <AppHero />;
};
