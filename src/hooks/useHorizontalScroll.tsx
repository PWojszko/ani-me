import { useState, useCallback } from "react";

type scrollParams = {
  toRight?: boolean;
};

const forceMaxScollOn = 95; // 0 - 100
const forceMinScrollOn = 5; // 0 - 100
const scrollProgressPerClick = 0.75; // 0 - 1

const useHorizontalScroll = () => {
  const [scrollContainer, setScrollContainer] = useState<HTMLElement | null>(
    null
  );
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const scroll = useCallback(
    ({ toRight = false }: scrollParams) => {
      if (scrollContainer) {
        const { scrollLeft, offsetWidth, scrollWidth, clientWidth } =
          scrollContainer;

        const maxScroll = scrollWidth - clientWidth;
        const minScroll = 0;

        const scrollAmount =
          (toRight ? 1 : -1) * (offsetWidth * scrollProgressPerClick);
        const scrollToPosition = scrollLeft + scrollAmount;
        const scrollToPositionProcentage = (scrollToPosition / maxScroll) * 100;

        let fromLeftScrollPosition = 0;

        if (scrollToPositionProcentage > forceMaxScollOn && toRight) {
          fromLeftScrollPosition = maxScroll;
        } else if (scrollToPositionProcentage < forceMinScrollOn && !toRight) {
          fromLeftScrollPosition = minScroll;
        } else {
          fromLeftScrollPosition = scrollToPosition;
        }

        scrollContainer.scrollTo({
          left: fromLeftScrollPosition,
          behavior: "smooth",
        });

        setScrollProgress((fromLeftScrollPosition / maxScroll) * 100);
      }
    },
    [scrollContainer]
  );

  return {
    scrollContainerRef: setScrollContainer,
    scrollLeft: () => scroll({}),
    scrollRight: () => scroll({ toRight: true }),
    scrollProgress,
  };
};

export default useHorizontalScroll;
