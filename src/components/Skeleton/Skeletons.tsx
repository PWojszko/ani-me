import { HTMLProps } from "react";
import Skeleton from "./Skeleton";

const Skeletons = ({
  className,
  amount = 1,
  keyPrefix,
}: {
  className: HTMLProps<HTMLElement>["className"];
  amount: number;
  keyPrefix: string;
}) => {
  return (
    <>
      {[...Array(amount)].map((_, index) => (
        <Skeleton
          key={`${keyPrefix}-skeleton-${index}`}
          className={className}
        />
      ))}
    </>
  );
};

export default Skeletons;
