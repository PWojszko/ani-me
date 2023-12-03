import AnimeCrousel from "./_AnimeCarousel/AnimeCarousel";
import Hero from "./_Hero/Hero";

const HomePage = () => {
  return (
    <section className="grid gap-10">
      <Hero />
      <AnimeCrousel title="Top anime" listType="topAnime" />
      <AnimeCrousel title="Current season" listType="seasonNow" />
    </section>
  );
};

export default HomePage;
