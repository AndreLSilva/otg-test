import { styled, Tabs } from "@mui/material";

export const Container = styled(Tabs)`
  min-height: 1.25rem;

  & > .MuiTabs-scroller {
    & > .MuiTabs-flexContainer {
      .MuiTab-root {
        padding: 0.5rem 0.5rem;

        min-width: unset;
        min-height: unset;

        font-size: 0.75rem;
        font-weight: 700;
        line-height: 0.88125rem;

        &.Mui-selected {
          color: ${({ theme }) => theme.palette.info.main};
        }
      }
    }

    & > .MuiTabs-indicator {
      transform: scaleX(0.7);
      background: ${({ theme }) => theme.palette.info.main};
    }
  }
`;
