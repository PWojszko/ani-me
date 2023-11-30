import Button from "@/components/Button";
import { Variants, motion } from "framer-motion";
import Link from "next/link";
import { Seasons } from "./SeasonPickerRoll";

type SeasonProps = {
  season: Seasons;
  year: number;
  isCurrentlyPicked: boolean;
};

const variants: Variants = {
  active: { opacity: 1, pointerEvents: "auto" },
  inactive: { opacity: 0.5, pointerEvents: "auto" },
};

const Season = ({ season, year, isCurrentlyPicked }: SeasonProps) => {
  return (
    <motion.div
      variants={variants}
      initial={isCurrentlyPicked ? "active" : "inactive"}
      animate={isCurrentlyPicked ? "active" : "inactive"}
    >
      <Link href={`/animelist/${year}/${season}`} replace>
        <Button className="w-full">{season}</Button>
      </Link>
    </motion.div>
  );
};

export default Season;
