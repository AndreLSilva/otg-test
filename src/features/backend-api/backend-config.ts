import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://api.basestudio.app/v1/c6b1a48fbc86a778b977b0",
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => (await apiClient.get(queryKey.join("/"))).data,
    },
  },
});
