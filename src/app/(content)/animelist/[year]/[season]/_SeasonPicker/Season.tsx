"use client";

import Button from "@/components/Button";
import { Variants, motion } from "framer-motion";
import Link from "next/link";
import { Seasons } from "./SeasonPickerRoll";
import { useState } from "react";

type SeasonProps = {
  season: Seasons;
  year: number;
  seasonParam: Seasons;
  yearParam: string;
};

const variants: Variants = {
  active: { opacity: 1, pointerEvents: "auto" },
  inactive: { opacity: 0.5, pointerEvents: "auto" },
};

const Season = ({ season, year, seasonParam, yearParam }: SeasonProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const isCurrentlyPicked =
    season === seasonParam && year === Number(yearParam);

  return (
    <motion.div
      variants={variants}
      initial={isClicked || isCurrentlyPicked ? "active" : "inactive"}
      animate={isClicked || isCurrentlyPicked ? "active" : "inactive"}
      onTap={() => setIsClicked(true)}
    >
      <Link href={`/animelist/${year}/${season}`} replace>
        <Button className="w-full">{season}</Button>
      </Link>
    </motion.div>
  );
};

export default Season;
