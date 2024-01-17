import Jikan from "@/vendor/jikan/jikan";
import Carousel from "@/components/Carousel/Carousel";
import AnimeCarouselCard from "./AnimeCarouselCard";

const animeListsApi = {
  topAnime: Jikan.getTopAnime,
  seasonNow: Jikan.getSeasonNow,
} as const;

export type AnimeCarouselAsyncProps = {
  listType: keyof typeof animeListsApi;
};

const AnimeCarouselAsync = async ({ listType }: AnimeCarouselAsyncProps) => {
  const animeList = await animeListsApi[listType]();

  return (
    <Carousel>
      {animeList?.data?.map((anime) => (
        <AnimeCarouselCard
          key={`current-season-anime-carousel-${anime.mal_id}`}
          anime={anime}
        />
      ))}
    </Carousel>
  );
};

export default AnimeCarouselAsync;
