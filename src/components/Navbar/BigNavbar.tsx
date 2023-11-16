"use client";

import Image from "next/image";
import Link from "next/link";
import Links from "./Links";
import { usePathname } from "next/navigation";
import { Variants, motion } from "framer-motion";

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

const BigNavbar = () => {
  const pathName = usePathname();

  return (
    <nav className="h-full w-full bg-neutral-950">
      <div className="sticky flex flex-col gap-2 p-4 top-4">
        <div className="mx-auto mb-6">
          <Link href="/">
            <Image src="/logo.webp" width={85} height={44} alt="ani-me logo" />
          </Link>
        </div>

        {Links.map(({ href, icon, text }) => {
          return (
            <Link
              href={href}
              key={`navlink-${href}`}
              className={pathName === href ? "pointer-events-none" : ""}
            >
              <motion.div
                className="flex gap-4 place-items-center px-3 py-1 rounded"
                variants={variants}
                initial="inactive"
                animate={pathName === href ? "active" : "inactive"}
                whileHover="active"
                whileTap="tapped"
              >
                {icon} {text}
              </motion.div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BigNavbar;
