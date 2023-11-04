"use client";

import { MotionProps, motion } from "framer-motion";

type MotionButtonProps = MotionProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
} & MotionButtonProps;

const buttonVariants = {
  initial: {
    backgroundColor: "rgb(127, 29, 29)",
    scale: 1,
  },
  hover: {
    backgroundColor: "rgb(186, 28, 28)",
    scale: 1.05,
  },
  tap: {
    backgroundColor: "rgb(186, 28, 28)",
    scale: 0.95,
    transition: { duration: 0.01 },
  },
};

const bgLettersVariants = {
  initial: {
    opacity: 0,
  },
  hover: {
    opacity: 0.25,
  },
};

const Button = ({
  type = "button",
  children,
  className = "",
  ...rest
}: ButtonProps) => {
  return (
    <motion.button
      className={`relative text-whitefont-bold py-2 px-4 rounded-2xl duration-150 overflow-hidden ${className}`}
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      type={type}
      {...rest}
    >
      <motion.div
        className="absolute inset-0 rotate-12 text-black text-3xl font-bold w-full h-full"
        variants={bgLettersVariants}
      >
        アニメ
      </motion.div>
      <span className="relative font-semibold">{children}</span>
    </motion.button>
  );
};

export default Button;
