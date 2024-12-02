export interface ResearchData {
  id: number;
  name: string;
  status: ResearchStatus;
}

type ResearchStatus = "Em Campo" | "Rascunho";
