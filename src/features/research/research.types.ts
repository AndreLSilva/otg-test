export interface Research {
  id: number;
  name: string;
  status: ResearchStatus;
}

type ResearchStatus = "Em Campo" | "Rascunho";