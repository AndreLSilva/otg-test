"use client";

import { Chip } from "@/design-system/atoms/chip/Chip";
import { Tabs } from "@/design-system/molecules/tabs/Tabs";
import { isSameDay, parseDate } from "@/utils/date.utils";
import { Close, Notifications } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Fragment, useMemo, useState } from "react";
import { useNotifications } from "../../hooks/useNotifications";
import { NotificationData } from "../../notifications.types";
import { NotificationCard } from "../notification-card/NotificationCard";
import {
  Container,
  Header,
  List,
  ListDivider,
  OpenButton,
  UnreadBadge,
} from "./NotificationsDrawer.styles";

interface NotificationsDrawerProps {
  className?: string;
}

export function NotificationsDrawer({ className = undefined }: NotificationsDrawerProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [tab, setTab] = useState<number>(0);

  const { isLoadingNotifications, notifications } = useNotifications();

  const [sortedNotifications, unreadCount] = useMemo(() => {
    const sorted: Record<string, NotificationData[]> = {};
    let count = 0;

    notifications?.forEach((notification) => {
      const date = notification.createAt.split(" ")[0];

      if (!notification.read) count++;
      if (date in sorted) sorted[date].push(notification);
      else sorted[date] = [notification];
    });

    return [sorted, count];
  }, [notifications]);

  return (
    <Container className={className} elevation={1} square open={open}>
      <OpenButton open={open} onClick={() => setOpen((c) => !c)}>
        {open ? (
          <Close />
        ) : (
          <>
            <Notifications />
            {!!unreadCount && <UnreadBadge />}
          </>
        )}
      </OpenButton>

      <Header elevation={1} square>
        <Typography component="h2" variant="subtitle1">
          Atualizações {!!unreadCount && <Chip>{unreadCount}</Chip>}
        </Typography>

        <Tabs value={tab} tabs={[{ label: "Todas" }]} onChange={setTab} />
      </Header>

      <List>
        {isLoadingNotifications ? (
          // TODO: Loading state
          <p>...loading</p>
        ) : (
          // Notifications list items
          Object.entries(sortedNotifications).map(([dateStr, notifications]) => {
            const date = parseDate(dateStr);
            return (
              <Fragment key={dateStr}>
                <Typography component="h6" variant="body2" color="textSecondary">
                  {isSameDay(date, new Date())
                    ? "Hoje"
                    : date.toLocaleDateString(undefined, {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                </Typography>

                {notifications.map((notification) => (
                  <Fragment key={notification.id}>
                    <ListDivider />
                    <NotificationCard notification={notification} />
                  </Fragment>
                ))}
              </Fragment>
            );
          })
        )}
      </List>
    </Container>
  );
}
