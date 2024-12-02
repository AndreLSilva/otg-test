import { Meta, StoryFn } from "@storybook/react";
import { ResearchCard } from "./ResearchCard";

export default {
  title: "Features/Research/Research Card",
  component: ResearchCard,
} as Meta<typeof ResearchCard>;

export const EmCampo: StoryFn<typeof ResearchCard> = (args) => {
  return <ResearchCard {...args} />;
};
EmCampo.args = {
  loading: false,
  research: {
    id: 1,
    name: "Título da Pesquisa",
    status: "Em Campo",
  },
};

export const Rascunho: StoryFn<typeof ResearchCard> = (args) => {
  return <ResearchCard {...args} />;
};
Rascunho.args = {
  loading: false,
  research: {
    id: 1,
    name: "Título da Pesquisa",
    status: "Rascunho",
  },
};
