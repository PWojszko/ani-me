"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  children: React.ReactNode;
  url: string;
};

const NavLink = ({ children, url }: NavLinkProps) => {
  const pathname = usePathname();

  const ifActiveClassNames = (classNames: string) => {
    return pathname === url ? classNames : "";
  };

  return (
    <Link href={url}>
      <div
        className={
          "flex gap-4 place-items-center hover:bg-neutral-800 hover:scale-105 px-3 py-1 rounded duration-150 group" +
          ifActiveClassNames(" bg-red-800")
        }
      >
        {children}
      </div>
    </Link>
  );
};

export default NavLink;
