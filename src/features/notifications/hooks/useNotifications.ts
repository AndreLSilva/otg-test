import { useQuery } from "@tanstack/react-query";
import { NotificationData } from "../notifications.types";

export function useNotifications() {
  const { isLoading, data } = useQuery<NotificationData[]>({
    queryKey: ["notifications"],
  });

  return {
    isLoadingNotifications: isLoading,
    notifications: data,
  };
}
