import Skeletons from "../Skeleton/Skeletons";

type CarouselSkeletonProps = {
  width?: number;
  height?: number;
  amount?: number;
  skeletonClassName?: string;
};

const CarouselSkeleton = ({
  width = 224,
  height = 320,
  amount = 10,
  skeletonClassName = "",
}: CarouselSkeletonProps) => {
  return (
    <section className="relative grid grid-flow-col grid-rows-1 items-center origin-top">
      <div
        className="grid grid-flow-col gap-6 overflow-x-auto no-scrollbar pr-6"
        style={{
          gridAutoColumns: `${width}px`,
          gridAutoRows: `${height}px`,
          height: `${height}px`,
        }}
      >
        <Skeletons
          amount={amount}
          keyPrefix="carousel"
          className={`${skeletonClassName}`}
        />
      </div>
    </section>
  );
};

export default CarouselSkeleton;
