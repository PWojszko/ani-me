import Skeleton from "./Skeleton";

type TextSkeletonProps = {
  variant: "p" | "h1" | "h2" | "h3";
};

const TextSkeleton = ({ variant }: TextSkeletonProps) => {
  if (variant === "h1") {
    return <Skeleton className={"h-6 w-full mb-2"} />;
  }

  if (variant === "h2") {
    return <Skeleton className={"h-5 w-full mb-2"} />;
  }

  if (variant === "h3") {
    return <Skeleton className={"h-[1.25rem] w-full mb-2"} />;
  }

  return <Skeleton className={"h-4 w-full mb-2"} />;
};

export default TextSkeleton;
