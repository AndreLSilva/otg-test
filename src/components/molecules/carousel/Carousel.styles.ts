import { styled } from "@mui/material";

interface CarouselContentProps {
  itemsPerView: number | undefined;
  spacing: number;
}

export const Container = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.75rem;
`;

export const CarouselContainer = styled("div")`
  display: flex;
  align-items: center;
  gap: 1rem;

  width: 100%;

  & > button {
    &:first-of-type {
      margin-left: -3.375rem;
    }
    &:last-of-type {
      margin-right: -3.375rem;
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
