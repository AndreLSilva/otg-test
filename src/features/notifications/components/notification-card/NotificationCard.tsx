import { routes } from "@/constants/routes";
import { Skeleton } from "@/design-system/atoms/skeleton/Skeleton";
import { ArrowForward, Comment } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { NotificationData } from "../../notifications.types";
import {
  Container,
  Content,
  ForwardButton,
  Header,
  Message,
  UnreadBadge,
} from "./NotificationCard.styles";

interface NotificationCardProps {
  loading?: boolean;
  notification?: NotificationData;
}

export function NotificationCard({
  loading = false,
  notification = undefined,
}: NotificationCardProps) {
  return (
    <Container variant="outlined" color="primaryAlt">
      {!loading && !notification?.read && <UnreadBadge />}

      <Header>
        <Comment style={{ fontSize: "0.875rem" }} />
        <Typography variant="overline" fontWeight="700">
          {loading ? <Skeleton width="9.25rem" /> : <>{notification?.comments} novos comentários</>}
        </Typography>
      </Header>

      <Content>
        {loading ? (
          <Typography sx={{ width: "100%" }} variant="body2">
            <Skeleton />
            <Skeleton width="80%" />
          </Typography>
        ) : (
          <Message
            variant="body2"
            color="textSecondary"
            // TODO: This is not safe. It would be safer if the message came in different fields.
            dangerouslySetInnerHTML={{ __html: notification?.mensage ?? "" }}
          />
        )}

        {loading ? (
          <Skeleton sx={{ flexShrink: 0 }} variant="rounded" width="2.375rem" height="2.375rem" />
        ) : (
          <ForwardButton
            variant="outlined"
            startIcon={ArrowForward}
            href={routes.notification(notification?.id ?? "")}
          />
        )}
      </Content>
    </Container>
  );
}
