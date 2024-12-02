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
  notification: NotificationData;
}

export function NotificationCard({
  notification: { read, comments, mensage },
}: NotificationCardProps) {
  return (
    <Container variant="outlined" color="primaryAlt">
      {!read && <UnreadBadge />}

      <Header>
        <Comment style={{ fontSize: "0.875rem" }} />
        <Typography variant="overline" fontWeight="700">
          {comments} novos comentários
        </Typography>
      </Header>

      <Content>
        <Message
          variant="body2"
          color="textSecondary"
          // TODO: This is not safe. It would be safer if the message came in different fields.
          dangerouslySetInnerHTML={{ __html: mensage }}
        />

        <ForwardButton variant="outlined" startIcon={ArrowForward} />
      </Content>
    </Container>
  );
}
