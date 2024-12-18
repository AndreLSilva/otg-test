"use client";

import { Button } from "@/design-system/atoms/button/Button";
import { PaginationDots } from "@/design-system/atoms/pagination-dots/PaginationDots";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Breakpoint } from "@mui/material";
import {
  Children,
  ReactNode,
  UIEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { CarouselContainer, CarouselContent, Container } from "./Carousel.styles";

interface CarouselProps {
  className?: string;
  itemsPerView?: number;
  hideButtonBreakpoint?: Breakpoint;
  /** Spacing between items **in rem units**. */
  spacing?: number;
  children?: ReactNode;
}

export function Carousel({
  className = undefined,
  hideButtonBreakpoint = "xs",
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

  const handleCarouselContent = useCallback(
    (element: HTMLDivElement | null) => {
      if (!element) return;
      carouselContainerRef.current = element;

      setPagesAmount(() => {
        if (itemsPerView) return Math.ceil(Children.count(children) / itemsPerView);
        return Math.ceil(element.scrollWidth / element.clientWidth);
      });
    },
    [children, itemsPerView],
  );

  const handleWindowResize = useCallback(() => {
    if (!carouselContainerRef.current) return;
    handleCarouselContent(carouselContainerRef.current);
  }, [handleCarouselContent]);

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

  // Adds event listener to window resize event to recalculate carousel settings to match new size.
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [handleWindowResize]);

  return (
    <Container className={className}>
      <CarouselContainer hideButtonBreakpoint={hideButtonBreakpoint}>
        {pagesAmount > 1 && (
          <Button
            startIcon={ChevronLeft}
            disabled={scrollStatus === "start"}
            onClick={() => goToPage(page - 1)}
          />
        )}

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

        {pagesAmount > 1 && (
          <Button
            startIcon={ChevronRight}
            disabled={scrollStatus === "end"}
            onClick={() => goToPage(page + 1)}
          />
        )}
      </CarouselContainer>

      {pagesAmount > 1 && (
        <PaginationDots amount={pagesAmount} selected={page} onSelect={goToPage} />
      )}
    </Container>
  );
}
