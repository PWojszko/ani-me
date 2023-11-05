"use client";

import Button from "@/components/Button";
import { SeasonsList } from "@/vendor/jikan/jikanTypes";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

type SeasonsPickerProps = {
  seasons: SeasonsList;
};

const SeasonsPicker = ({ seasons }: SeasonsPickerProps) => {
  const [selectedYear, setSelectedYear] = useState(2024);
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = (year: number) => {
    if (ref.current) {
      const indexOfYear = seasons.data.findIndex(
        (season) => season.year === year
      );

      const refChildren = ref.current.children[indexOfYear];
      refChildren.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleYearClick = (year: number) => {
    setSelectedYear(year);
    handleScroll(year);
  };

  return (
    <div className="flex p-6 gap-10">
      <div className="flex place-items-center gap-4">
        <div className="relative">
          <div
            className="px-4 h-48 overflow-y-scroll no-scrollbar py-20"
            ref={ref}
            style={{
              WebkitMaskImage:
                "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%);",
            }}
          >
            {seasons?.data.map(({ year }) => {
              const isYear = {
                current: year === selectedYear,
                next: year - selectedYear === 1,
                prev: year - selectedYear === -1,
              };

              const calculateScale = () => {
                if (isYear.current) return 1.25;
                if (isYear.next || isYear.prev) return 1;
                return 0.8;
              };

              const calculateOpacity = () => {
                if (isYear.current) return 1;
                if (isYear.next || isYear.prev) return 0.5;
                return 0.25;
              };

              return (
                <div key={`seasons-${year}`}>
                  <motion.button
                    className="text-xl"
                    initial={{
                      scale: calculateScale(),
                      opacity: calculateOpacity(),
                    }}
                    animate={{
                      scale: calculateScale(),
                      opacity: calculateOpacity(),
                    }}
                    onClick={() => handleYearClick(year)}
                  >
                    {year}
                  </motion.button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="h-1/2 w-0.5 bg-neutral-200" />

        <div className="flex flex-col gap-2 px-4">
          {seasons?.data
            .find((season) => season.year === selectedYear)
            ?.seasons.map((season) => (
              <Button key={`single-seasons-${season}`}>{season}</Button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SeasonsPicker;
