"use client";

import Skeleton from "@/components/Skeleton/Skeleton";
import { HTMLProps } from "react";

type ButtonSkeletonProps = {
  children: React.ReactNode;
  className?: HTMLProps<HTMLElement>["className"];
};

const ButtonSkeleton = ({ children, className = "" }: ButtonSkeletonProps) => {
  return (
    <Skeleton
      className={`py-2 px-4 rounded-2xl overflow-hidden inline ${className}`}
    >
      <span className="invisible">{children}</span>
    </Skeleton>
  );
};

export default ButtonSkeleton;
