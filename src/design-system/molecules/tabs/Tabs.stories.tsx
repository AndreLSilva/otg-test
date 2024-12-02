import { Meta, StoryFn } from "@storybook/react";
import { Tabs } from "./Tabs";

export default {
  title: "Design System/Molecules/Tabs",
  component: Tabs,
} as Meta<typeof Tabs>;

export const Default: StoryFn<typeof Tabs> = (args) => {
  return <Tabs {...args} />;
};
Default.args = {
  tabs: [{ label: "Tab A" }, { label: "Tab B" }, { label: "Tab C" }, { label: "Tab D" }],
  value: 0,
};
