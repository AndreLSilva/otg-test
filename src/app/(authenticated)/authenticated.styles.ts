import { Carousel } from "@/components/molecules/carousel/Carousel";
import { AppHero } from "@/features/app-header/components/app-hero/AppHero";
import { NotificationsDrawer } from "@/features/notifications/components/notifications-drawer/NotificationDrawer";
import { styled } from "@mui/material";

export const LayoutContainer = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr;
  grid-template-areas:
    "hero"
    "content";

  height: 100%;

  ${({ theme }) => theme.breakpoints.up("lg")} {
    grid-template-columns: 1fr min-content;
    grid-template-rows: min-content 1fr;
    grid-template-areas:
      "hero hero"
      "content notifications";
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    grid-template-columns: 1fr min-content;
    grid-template-rows: min-content 1fr;
    grid-template-areas:
      "hero notifications"
      "content notifications";
  }
`;

export const LayoutAppHero = styled(AppHero)`
  grid-area: hero;
`;

export const LayoutPageContent = styled("div")`
  grid-area: content;

  width: 100%;

  & > :only-child {
    width: 100%;
    max-width: 48.875rem;

    margin: 0 auto;
    padding: 3.25rem 1.5rem;

    ${({ theme }) => theme.breakpoints.up("xl")} {
      max-width: 76.875rem;
    }
  }
`;

export const LayoutNotificationsDrawer = styled(NotificationsDrawer)`
  grid-area: notifications;
`;

// Page styles

export const PageContainer = styled("main")`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1.875rem;
  column-gap: 1.25rem;

  & > :nth-child(3) {
    grid-row: span 2;
  }

  ${({ theme }) => theme.breakpoints.up("sm")} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ResearchesCarousel = styled(Carousel)`
  grid-column: span 1;
  margin: 0 -1.5rem;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    grid-column: span 2;
  }

  ${({ theme }) => theme.breakpoints.up("sm")} {
    margin: 0 -3.375rem;
  }
`;
