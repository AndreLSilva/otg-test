"use client";

import { Button } from "@/components/atoms/button/Button";
import { PaginationDots } from "@/components/atoms/pagination-dots/PaginationDots";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Children, ReactNode, UIEventHandler, useRef, useState } from "react";
import { CarouselContainer, CarouselContent, Container } from "./Carousel.styles";

interface CarouselProps {
  itemsPerView?: number;
  /** Spacing between items **in rem units**. */
  spacing?: number;
  children?: ReactNode;
}

export function Carousel({
  itemsPerView = undefined,
  spacing = 0,
  children = undefined,
}: CarouselProps) {
  const carouselContainerRef = useRef<HTMLDivElement>();
  const [page, setPage] = useState<number>(0);
  const [pagesAmount, setPagesAmount] = useState<number>(1);
  const [scrollStatus, setScrollStatus] = useState<"start" | "middle" | "end">("start");

  const goToPage = (page: number) => {
    const container = carouselContainerRef.current;
    if (!container) return;

    container.scrollTo({
      left: container.clientWidth * page,
      behavior: "smooth",
    });
  };

  const handleCarouselContent = (element: HTMLDivElement | null) => {
    if (!element) return;
    carouselContainerRef.current = element;

    setPagesAmount(() => {
      if (itemsPerView) return Math.ceil(Children.count(children) / itemsPerView);
      return Math.ceil(element.scrollWidth / element.clientWidth);
    });
  };

  const handleScroll: UIEventHandler<HTMLDivElement> = (event) => {
    const container = carouselContainerRef.current;
    if (!container) return;

    const scrollPos = event.currentTarget.scrollLeft;

    setPage(Math.round(scrollPos / container.clientWidth));
    setScrollStatus(() => {
      if (scrollPos <= 0) return "start";
      if (scrollPos >= container.scrollWidth - container.clientWidth) return "end";
      return "middle";
    });
  };

  return (
    <Container>
      <CarouselContainer>
        <Button
          startIcon={ChevronLeft}
          disabled={scrollStatus === "start"}
          onClick={() => goToPage(page - 1)}
        />

        {/* Container */}
        <CarouselContent
          ref={handleCarouselContent}
          className="hide-scroll-bar"
          itemsPerView={itemsPerView}
          spacing={spacing}
          onScroll={handleScroll}
        >
          {Children.map(children, (child) => (
            <div>{child}</div>
          ))}
        </CarouselContent>

        <Button
          startIcon={ChevronRight}
          disabled={scrollStatus === "end"}
          onClick={() => goToPage(page + 1)}
        />
      </CarouselContainer>

      <PaginationDots amount={pagesAmount} selected={page} onSelect={goToPage} />
    </Container>
  );
}
