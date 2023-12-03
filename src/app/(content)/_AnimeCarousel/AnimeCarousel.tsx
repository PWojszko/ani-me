import { Suspense } from "react";
import AnimeCarouselSkeleton from "./AnimeCarouselSkeleton";
import AnimeCarouselAsync, {
  AnimeCarouselAsyncProps,
} from "./AnimeCarouselAsync";

type AnimeCrouselProps = {
  title: string;
  listType: AnimeCarouselAsyncProps["listType"];
};

const AnimeCrousel = ({ title, listType }: AnimeCrouselProps) => {
  return (
    <div className="flex relative">
      <div className="flex flex-col items-center relative">
        <h2 className="p-2 w-12 writing-vertical-rl">{title}</h2>
        <div className="flex-1 bg-red-700 w-0.5"></div>
      </div>

      <Suspense fallback={<AnimeCarouselSkeleton />}>
        <AnimeCarouselAsync listType={listType} />
      </Suspense>
    </div>
  );
};
export default AnimeCrousel;
