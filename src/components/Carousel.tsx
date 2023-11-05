"use client";
import React, { useEffect } from "react";
import { useRef, Children } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import useHorizontalScroll from "@/hooks/useHorizontalScroll";
import { AnimatePresence, MotionValue, motion, useScroll } from "framer-motion";

type CarouselProps = {
  children: React.ReactNode;
  width?: number;
  height?: number;
  setProgress?: React.Dispatch<
    React.SetStateAction<MotionValue<number> | null>
  >;
};

const Carousel = ({
  children,
  width = 225,
  height = 325,
  setProgress,
}: CarouselProps) => {
  const { scrollLeft, scrollRight, scrollContainerRef, scrollProgress } =
    useHorizontalScroll();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: ref });

  useEffect(() => {
    scrollContainerRef(() => ref.current);
  }, [scrollContainerRef]);

  useEffect(() => {
    if (setProgress) setProgress(scrollXProgress);
  }, [scrollXProgress, setProgress]);

  return (
    <motion.section
      className="relative grid grid-flow-col grid-rows-1 items-center origin-top"
      viewport={{ once: true }}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
    >
      <AnimatePresence>
        {scrollProgress > 0 && (
          <motion.button
            className="absolute flex place-items-center place-content-center text-xl left-4 p-6 z-10"
            onClick={scrollLeft}
            aria-label="scroll left"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 0.75, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            whileHover={{ opacity: 1 }}
          >
            <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
              <motion.circle
                cx="50"
                cy="50"
                r="30"
                stroke="rgb(185, 28, 28)"
                pathLength="1"
                className="indicator"
                style={{ pathLength: scrollXProgress }}
              />
            </svg>
            <AiOutlineArrowLeft className="absolute" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {scrollProgress < 100 && (
          <motion.button
            className="absolute flex place-items-center place-content-center text-xl right-4 p-6 z-10"
            onClick={scrollRight}
            aria-label="scroll right"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 0.75, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            whileHover={{ opacity: 1 }}
          >
            <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
              <motion.circle
                cx="50"
                cy="50"
                r="30"
                stroke="rgb(185, 28, 28)"
                pathLength="1"
                className="indicator"
                style={{ pathLength: scrollXProgress }}
              />
            </svg>
            <AiOutlineArrowRight className="absolute" />
          </motion.button>
        )}
      </AnimatePresence>

      <div
        className="grid grid-flow-col gap-6 overflow-x-auto no-scrollbar pr-6 snap-x"
        ref={ref}
        style={{
          gridAutoColumns: `${width}px`,
          gridAutoRows: `${height}px`,
          height: `${height}px`,
        }}
      >
        {Children.toArray(children).map((child, index) => (
          <div key={index} className="snap-start overflow-hidden rounded-xl">
            {child}
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Carousel;
