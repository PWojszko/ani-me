import TopAnime from "./_AnimeCarousel/_TopAnime/TopAnime";
import CurrentSeasonAnime from "./_AnimeCarousel/_CurrentSeasonAnime/CurrentSeasonAnime";
import Hero from "./_Hero/Hero";

const Home = () => {
  return (
    <section className="grid gap-10">
      <Hero />
      <TopAnime />
      <CurrentSeasonAnime />
    </section>
  );
};

export default Home;
