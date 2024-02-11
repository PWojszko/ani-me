import AnimeCarousel from "../../components/AnimeCarousel/AnimeCarousel";
import Hero from "../../components/Hero/Hero";

const HomePage = () => {
  return (
    <section className="grid gap-10">
      <Hero />
      <AnimeCarousel title="Top anime" listType="topAnime" />
      <AnimeCarousel title="Current season" listType="seasonNow" />
    </section>
  );
};

export default HomePage;
