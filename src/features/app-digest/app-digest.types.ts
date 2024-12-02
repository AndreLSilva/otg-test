import { ResearchData } from "../research/research.types";

export interface AppDigestData {
  id: string;
  createAt: string;
  researches: ResearchesDigest;
  audience: AudienceDigest;
  credits: CreditsDigest;
}

export interface ResearchesDigest {
  running: string;
  scripting: number;
  myresearches: ResearchData[];
}

export interface AudienceDigest {
  balance: number;
  sended: number;
  contacts: number;
}

export interface CreditsDigest {
  running: number;
  reserved: number;
  available: number;
}
