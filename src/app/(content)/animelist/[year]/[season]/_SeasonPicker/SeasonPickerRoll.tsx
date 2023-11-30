"use client";

import { SeasonsList } from "@/vendor/jikan/jikanTypes";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Year from "./Year";
import Season from "./Season";
import { useParams } from "next/navigation";

export type Seasons = "winter" | "spring" | "summer" | "fall";

type SeasonPickerRollProps = {
  seasons?: SeasonsList;
};

const SeasonPickerRoll = ({ seasons }: SeasonPickerRollProps) => {
  const params: { year: string; season: Seasons } = useParams();
  const ref = useRef<HTMLDivElement>(null);

  const [selectedYear, setSelectedYear] = useState(Number(params.year));

  const handleYearClick = (year: number) => {
    setSelectedYear(year);
  };

  useEffect(() => {
    if (ref.current) {
      const indexOfYear = seasons?.data?.findIndex(
        (season) => season.year === selectedYear
      );
      const refChildren = ref.current.children[indexOfYear ?? 0];
      refChildren?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [seasons?.data, selectedYear]);

  return (
    <div className="flex place-items-center justify-between p-4 w-full h-full">
      <div className="relative">
        <motion.div
          className="px-2 h-48 overflow-y-scroll no-scrollbar py-20"
          ref={ref}
          initial={{
            WebkitMaskImage:
              "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
          }}
        >
          {seasons?.data?.map(({ year }) => (
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

      <div className="grid gap-2">
        {seasons?.data
          ?.find((season) => season.year === selectedYear)
          ?.seasons.map((season) => (
            <Season
              season={season}
              year={selectedYear}
              isCurrentlyPicked={
                season === params.season && selectedYear === Number(params.year)
              }
              key={`single-seasons-${season}`}
            />
          ))}
      </div>
    </div>
  );
};

export default SeasonPickerRoll;
