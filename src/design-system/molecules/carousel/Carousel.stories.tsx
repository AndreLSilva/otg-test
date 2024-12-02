import { range } from "@/utils/array.utils";
import { Meta, StoryFn } from "@storybook/react";
import { Carousel } from "./Carousel";

export default {
  title: "Design System/Molecules/Carousel",
  component: Carousel,
} as Meta<typeof Carousel>;

export const Default: StoryFn<typeof Carousel> = (args) => {
  return <Carousel {...args} />;
};
Default.args = {
  spacing: 1,
  children: range(14).map((i) => (
    <div
      key={i}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "12rem",
        height: "12rem",
        borderRadius: "0.5rem",
        color: "white",
        background: "black",
      }}
    >
      {i + 1}
    </div>
  )),
};

export const Paginated: StoryFn<typeof Carousel> = (args) => {
  return <Carousel {...args} />;
};
Paginated.args = {
  itemsPerView: 3,
  spacing: 1,
  children: range(14).map((i) => (
    <div
      key={i}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "auto",
        height: "12rem",
        borderRadius: "0.5rem",
        color: "white",
        background: "black",
      }}
    >
      {i + 1}
    </div>
  )),
};
