"use client";

import { SeasonsList } from "@/vendor/jikan/jikanTypes";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Year from "./Year";
import Season from "./Season";

export type Seasons = "winter" | "spring" | "summer" | "fall";

type SeasonsPickerProps = {
  seasons?: SeasonsList;
  yearParam: string;
  seasonParam: Seasons;
};

const SeasonsPicker = ({
  seasons,
  yearParam,
  seasonParam,
}: SeasonsPickerProps) => {
  const [selectedYear, setSelectedYear] = useState(Number(yearParam));
  const ref = useRef<HTMLDivElement>(null);

  const handleYearClick = (year: number) => {
    setSelectedYear(year);
  };

  useEffect(() => {
    if (ref.current) {
      const indexOfYear = seasons?.data.findIndex(
        (season) => season.year === selectedYear
      );
      const refChildren = ref.current.children[indexOfYear ?? 0];
      refChildren.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [seasons?.data, selectedYear]);

  return (
    <div className="grid gap-10">
      <div className="flex gap-10">
        <div className="flex place-items-center gap-4">
          <div className="relative">
            <motion.div
              className="px-4 h-48 overflow-y-scroll no-scrollbar py-20"
              ref={ref}
              initial={{
                WebkitMaskImage:
                  "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
              }}
            >
              {seasons?.data.map(({ year }) => (
                <Year
                  key={`rotator-year-${year}`}
                  handleYearClick={handleYearClick}
                  selectedYear={selectedYear}
                  year={year}
                />
              ))}
            </motion.div>
          </div>

          <div className="h-1/2 w-0.5 bg-neutral-200" />

          <div className="flex flex-col gap-2 px-4">
            {seasons?.data
              .find((season) => season.year === selectedYear)
              ?.seasons.map((season) => (
                <Season
                  season={season}
                  year={selectedYear}
                  seasonParam={seasonParam}
                  yearParam={yearParam}
                  key={`single-seasons-${season}`}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonsPicker;
