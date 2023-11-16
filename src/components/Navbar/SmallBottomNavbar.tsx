"use client";

import Link from "next/link";
import Links from "./Links";
import { Variants, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const variants: Variants = {
  active: {
    scale: 1.05,
    opacity: 1,
  },
  inactive: {
    scale: 1,
    opacity: 0.75,
  },
  tapped: {
    scale: 0.95,
    opacity: 0.5,
  },
};

const SmallBottomNavbar = () => {
  const pathName = usePathname();

  return (
    <nav className="flex px-4 py-8 gap-4 place-content-around bg-neutral-950">
      {Links.map(({ href, icon, text }) => {
        return (
          <Link
            href={href}
            key={`navlink-${href}`}
            className={pathName === href ? "pointer-events-none" : ""}
          >
            <motion.div
              className="grid gap-2 place-items-center p-1"
              variants={variants}
              initial="inactive"
              animate={pathName === href ? "active" : "inactive"}
              whileTap="tapped"
            >
              <span>{text}</span>
              <span>{icon}</span>
            </motion.div>
          </Link>
        );
      })}
    </nav>
  );
};

export default SmallBottomNavbar;
