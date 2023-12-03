import Jikan from "@/vendor/jikan/jikan";
import Carousel from "../../../../components/Carousel/Carousel";
import AnimeCarouselCard from "../AnimeCarouselCard";

const CurrentSeasonAnimeAsync = async () => {
  const currentSeasonAnime = await Jikan.getSeasonNow();

  return (
    <Carousel>
      {currentSeasonAnime?.data?.map((anime) => (
        <AnimeCarouselCard
          key={`current-season-anime-carousel-${anime.mal_id}`}
          anime={anime}
        />
      ))}
    </Carousel>
  );
};

export default CurrentSeasonAnimeAsync;
