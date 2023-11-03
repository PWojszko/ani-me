"use client";
import React from "react";
import { useRef, useState, Children } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

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
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const handleScroll = (toRight: boolean) => {
    if (ref.current) {
      const { scrollLeft, offsetWidth, scrollWidth, clientWidth } = ref.current;

      const scrollToPosition =
        scrollLeft + (toRight ? offsetWidth * 0.75 : -offsetWidth * 0.75);
      const maxPosition = scrollWidth - clientWidth;
      const scrollProgressCalc = (scrollToPosition / maxPosition) * 100;

      ref.current?.scrollTo({
        left: scrollToPosition,
        behavior: "smooth",
      });

      const isScrollOverRight = scrollProgressCalc > 100;
      const isScrollOverLeft = scrollProgressCalc < 5;

      setScrollProgress(
        isScrollOverRight ? 100 : isScrollOverLeft ? 0 : scrollProgressCalc
      );
    }
  };

  return (
    <section className="relative grid grid-flow-col grid-rows-1 items-center">
      <button
        className={`absolute text-xl left-4 p-6 bg-gray-950 rounded-full opacity-75 hover:opacity-100 duration-300 z-10 ${
          scrollProgress <= 0 && "hidden"
        }`}
        onClick={() => handleScroll(false)}
        aria-label="scroll left"
      >
        <AiOutlineArrowLeft />
      </button>

      <button
        className={`absolute text-xl right-4 p-6 bg-gray-950 rounded-full opacity-75 hover:opacity-100 duration-300 z-10 ${
          scrollProgress >= 100 && "hidden"
        }`}
        onClick={() => handleScroll(true)}
        aria-label="scroll right"
      >
        <AiOutlineArrowRight />
      </button>

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

      <div
        className={`absolute -bottom-4 -left-6 -ml-px right-0 h-0.5 translate-y-full overflow-hidden`}
      >
        <div
          className={`absolute inset-0 bg-red-700 duration-500`}
          style={{
            translate: `-${100 - scrollProgress}% 0`,
          }}
        />
      </div>
    </section>
  );
};

export default Carousel;
