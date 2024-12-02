"use client";

import { Chip } from "@/components/atoms/chip/Chip";
import { Tabs } from "@/components/molecules/tabs/Tabs";
import { isSameDay, parseDate } from "@/utils/date.utils";
import { Close, Notifications } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Fragment, useMemo, useState } from "react";
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

const notifications = [
  {
    comments: 2,
    read: true,
    mensage:
      "Seu time está colaborando em \u003Cb\u003EACME Corp: Promoção Verão da Sorte\u003C/b\u003E",
    id: "43b77862b20c7c2af28a35",
    createAt: "29/11/2024 13:46:53",
  },
  {
    comments: 2,
    read: false,
    mensage:
      "Seu time está colaborando em \u003Cb\u003EACME Corp: Promoção Verão da Sorte\u003C/b\u003E",
    id: "43b77862b20c7c2af28a35",
    createAt: "28/05/2024 13:46:53",
  },
  {
    comments: 2,
    read: false,
    mensage:
      "Seu time está colaborando em \u003Cb\u003EACME Corp: Promoção Verão da Sorte\u003C/b\u003E",
    id: "df9443205b46390a57357e",
    createAt: "28/05/2024 13:46:53",
  },
  {
    comments: 2,
    read: false,
    mensage:
      "Seu time está colaborando em \u003Cb\u003EACME Corp: Promoção Verão da Sorte\u003C/b\u003E",
    id: "c2595bb5bee282b666f313",
    createAt: "15/06/2024 13:46:53",
  },
  {
    comments: 2,
    read: false,
    mensage:
      "Seu time está colaborando em \u003Cb\u003EACME Corp: Promoção Verão da Sorte\u003C/b\u003E",
    id: "asdasdas1dds1d",
    createAt: "28/05/2024 13:46:53",
  },
  {
    comments: 2,
    read: true,
    mensage:
      "Seu time está colaborando em \u003Cb\u003EACME Corp: Promoção Verão da Sorte\u003C/b\u003E",
    id: "c2595bb5bee282bdsaddasd1wd1ds666f313",
    createAt: "15/06/2024 13:46:53",
  },
];

export function NotificationsDrawer({ className = undefined }: NotificationsDrawerProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [tab, setTab] = useState<number>(0);

  const [sortedNotifications, unreadCount] = useMemo(() => {
    const sorted: Record<string, NotificationData[]> = {};
    let count = 0;

    notifications.forEach((notification) => {
      const date = notification.createAt.split(" ")[0];

      if (!notification.read) count++;
      if (date in sorted) sorted[date].push(notification);
      else sorted[date] = [notification];
    });

    return [sorted, count];
  }, []);

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
        {Object.entries(sortedNotifications).map(([dateStr, notifications]) => {
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
        })}
      </List>
    </Container>
  );
}
