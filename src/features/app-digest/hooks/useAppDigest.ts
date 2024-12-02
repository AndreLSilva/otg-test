import { useQuery } from "@tanstack/react-query";
import { AppDigestData } from "../app-digest.types";

export function useAppDigest() {
  const { isLoading, data } = useQuery<AppDigestData>({
    // In a real world scenario this ID would be fetched from another source.
    queryKey: ["home", "7a581b0e16b559ff9a9957"],
  });

  return {
    isLoadingAppDigest: isLoading,
    appDigest: data,
  };
}
