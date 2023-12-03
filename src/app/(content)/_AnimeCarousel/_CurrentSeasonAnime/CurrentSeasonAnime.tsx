import { Suspense } from "react";
import CurrentSeasonAnimeAsync from "./CurrentSeasonAnimeAsync";
import CurrentSeasonAnimeSkeleton from "./CurrentSeasonAnimeSkeleton";

const CurrentSeasonAnime = () => {
  return (
    <div className="flex relative">
      <div className="flex flex-col items-center relative">
        <h2 className="p-2 w-12 writing-vertical-rl">Current season</h2>
        <div className="flex-1 bg-red-700 w-0.5"></div>
      </div>

      <Suspense fallback={<CurrentSeasonAnimeSkeleton />}>
        <CurrentSeasonAnimeAsync />
      </Suspense>
    </div>
  );
};
export default CurrentSeasonAnime;
