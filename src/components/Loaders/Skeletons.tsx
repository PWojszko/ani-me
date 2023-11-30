import Skeleton from "./Skeleton";

const Skeletons = ({
  className,
  amount = 1,
  keyPrefix,
}: {
  className: string;
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
