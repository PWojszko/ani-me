"use client";
import React from "react";
import { useRef, useState, Children } from "react";

const Carousel = ({
  children,
  width = 225,
  height = 325,
}: {
  children: React.ReactNode;
  width?: number;
  height?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [srollProgress, setSrollProgress] = useState<number>(0);

  const handleScroll = (toRight: boolean) => {
    if (ref.current) {
      const { scrollLeft, offsetWidth, scrollWidth, clientWidth } = ref.current;

      const scrollToPosition =
        scrollLeft + (toRight ? offsetWidth : -offsetWidth);
      const maxPosition = scrollWidth - clientWidth;
      const scrollProgress = (scrollToPosition / maxPosition) * 100;

      ref.current?.scrollTo({
        left: scrollToPosition,
        behavior: "smooth",
      });
      setSrollProgress(scrollProgress);
    }
  };

  return (
    <section className="relative grid grid-flow-col grid-rows-1 items-center">
      <button
        className="absolute left-4 p-6 bg-gray-950 rounded-full opacity-75 hover:opacity-100 duration-300 z-10"
        onClick={() => handleScroll(false)}
        aria-label="scroll left"
      >
        {"<"}
      </button>

      <button
        className="absolute right-4 p-6 bg-gray-950 rounded-full opacity-75 hover:opacity-100 duration-300 z-10"
        onClick={() => handleScroll(true)}
        aria-label="scroll right"
      >
        {">"}
      </button>

      <div
        className="grid grid-flow-col gap-6 overflow-x-auto no-scrollbar"
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
    </section>
  );
};

export default Carousel;
