import { Suspense } from "react";
import AnimeAsync from "./AnimeAsync";
import AnimeSkeleton from "./AnimeSkeleton";

type AnimeProps = {
  mal_id: string;
};

const Anime = ({ mal_id }: AnimeProps) => {
  return (
    <Suspense fallback={<AnimeSkeleton />}>
      <AnimeAsync mal_id={mal_id} />
    </Suspense>
  );
};

export default Anime;
