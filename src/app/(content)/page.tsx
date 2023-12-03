import Jikan from "@/vendor/jikan/jikan";
import AnimeCrousel from "./_AnimeCarousel/AnimeCarousel";
import Hero from "./_Hero/Hero";

const Home = () => {
  return (
    <section className="grid gap-10">
      <Hero />
      <AnimeCrousel title="Top anime" listType="topAnime" />
      <AnimeCrousel title="Current season" listType="seasonNow" />
    </section>
  );
};

export default Home;
