import { Suspense } from "react";
import TopAnimeCarousel from "./TopAnimeCarousel";
import TopAnimeSkeleton from "./TopAnimeSkeleton";

const TopAnime = () => {
  return (
    <div className="flex relative">
      <div className="flex flex-col items-center relative">
        <h2 className="p-2 w-12 writing-vertical-rl">Top anime</h2>
        <div className="flex-1 bg-red-700 w-0.5"></div>
      </div>

      <Suspense fallback={<TopAnimeSkeleton />}>
        <TopAnimeCarousel />
      </Suspense>
    </div>
  );
};
export default TopAnime;
