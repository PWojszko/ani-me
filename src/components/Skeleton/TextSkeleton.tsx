import { HTMLProps } from "react";
import Skeleton from "./Skeleton";

type TextSkeletonProps = {
  variant: "p" | "h1" | "h2" | "h3";
  className?: HTMLProps<HTMLElement>["className"];
};

const TextSkeleton = ({ variant, className }: TextSkeletonProps) => {
  if (variant === "h1") {
    return <Skeleton className={`h-6 mb-2 ${className}`} />;
  }

  if (variant === "h2") {
    return <Skeleton className={`h-5 mb-2 ${className}`} />;
  }

  if (variant === "h3") {
    return <Skeleton className={`h-[1.25rem] mb-2 ${className}`} />;
  }

  return <Skeleton className={`h-4 mb-2 ${className}`} />;
};

export default TextSkeleton;
