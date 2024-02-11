import { Suspense } from "react";
import CarouselSkeleton from "./CarouselSkeleton";

type AnimeCarouselProps = {
  title: string;
};

const Crousel = ({ title }: AnimeCarouselProps) => {
  return (
    <div className="grid grid-flow-col relative">
      <div className="flex flex-col items-center relative">
        <h2 className="p-2 w-12 writing-vertical-rl">{title}</h2>
        <div className="flex-1 bg-red-700 w-0.5"></div>
      </div>

      <Suspense fallback={<CarouselSkeleton skeletonClassName="rounded-xl" />}>
        {/* <AnimeCarouselAsync listType={listType} /> */}
      </Suspense>
    </div>
  );
};
export default Crousel;
