import { Variants, motion } from "framer-motion";

type YearProps = {
  year: number;
  selectedYear: number;
  handleYearClick: (year: number) => void;
};

const variants: Variants = {
  picked: { scale: 1.25, opacity: 1 },
  nextTo: { scale: 1, opacity: 0.5 },
  other: { scale: 0.8, opacity: 0.25 },
};

const Year = ({ year, selectedYear, handleYearClick }: YearProps) => {
  const getVariant = () => {
    if (year === selectedYear) return "picked";
    if (Math.abs(year - selectedYear) === 1) return "nextTo";
    return "other";
  };

  return (
    <div>
      <motion.button
        className="text-xl"
        variants={variants}
        initial={getVariant()}
        animate={getVariant()}
        onClick={() => handleYearClick(year)}
      >
        {year}
      </motion.button>
    </div>
  );
};

export default Year;
