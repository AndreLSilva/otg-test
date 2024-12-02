export const routes = {
  researches: "/pesquisas",
  credits: "/creditos",
  campaigns: "/campanhas",
  team: "/equipe",
  settings: "/configuracoes",
  customer: (id: string) => `/customer/${id}`,
  notification: (id: string) => `/notifications/${id}`,
};
