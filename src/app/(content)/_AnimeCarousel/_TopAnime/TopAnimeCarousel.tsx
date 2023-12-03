import Jikan from "@/vendor/jikan/jikan";
import Carousel from "../../../../components/Carousel/Carousel";
import AnimeCarouselCard from "../AnimeCarouselCard";

const TopAnimeCarousel = async () => {
  const topAnime = await Jikan.getTopAnime();

  return (
    <Carousel>
      {topAnime?.data?.map((anime) => (
        <AnimeCarouselCard
          key={`top-anime-carousel-${anime.mal_id}`}
          anime={anime}
        />
      ))}
    </Carousel>
  );
};

export default TopAnimeCarousel;
