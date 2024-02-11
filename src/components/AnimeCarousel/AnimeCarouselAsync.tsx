import Jikan from "@/vendor/jikan/jikan";
import CarouselWrapper from "@/components/Carousel/CarouselWrapper";
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
    <CarouselWrapper>
      {animeList?.data?.map((anime) => (
        <AnimeCarouselCard
          key={`current-season-anime-carousel-${anime.mal_id}`}
          anime={anime}
        />
      ))}
    </CarouselWrapper>
  );
};

export default AnimeCarouselAsync;
