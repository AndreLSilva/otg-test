import { Meta, StoryFn } from "@storybook/react";
import { PaginationDots } from "./PaginationDots";

export default {
  title: "Design System/Atoms/Pagination Dots",
  component: PaginationDots,
} as Meta<typeof PaginationDots>;

export const Default: StoryFn<typeof PaginationDots> = (args) => {
  return <PaginationDots {...args} />;
};
Default.args = {
  amount: 6,
  selected: 2,
};
