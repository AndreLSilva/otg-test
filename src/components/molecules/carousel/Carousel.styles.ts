import { Breakpoint, styled } from "@mui/material";

interface CarouselContentProps {
  itemsPerView: number | undefined;
  spacing: number;
}

interface CarouselContainerProps {
  hideButtonBreakpoint: Breakpoint;
}

export const Container = styled("div")`
  display: flex;
  flex-direction: column;

  overflow: hidden;

  /* Navigation dots */
  & > div:last-of-type {
    margin: 1rem auto;
  }
`;

export const CarouselContainer = styled("div")<CarouselContainerProps>`
  display: flex;
  align-items: center;
  gap: 1rem;

  width: 100%;

  ${({ theme, hideButtonBreakpoint }) => theme.breakpoints.down(hideButtonBreakpoint)} {
    & > button {
      display: none;
    }

    & > div {
      padding: 0 1.5rem;
    }
  }
`;

export const CarouselContent = styled("div")<CarouselContentProps>`
  display: flex;

  width: 100%;
  overflow: auto;

  scroll-snap-type: x mandatory;

  /* Carousel items */
  & > div {
    flex: 1 0;
    flex-basis: ${({ itemsPerView }) => (itemsPerView ? `${100 / itemsPerView}` : undefined)}%;

    padding: 0 ${({ spacing }) => spacing / 2}rem;

    scroll-snap-align: center;

    &:first-of-type {
      padding-left: 0;
    }
    &:last-of-type {
      padding-right: 0;
    }
  }
`;
