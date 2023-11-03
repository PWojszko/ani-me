import Jikan from "@/vendor/jikan/jikan";
import Row from "./row";
import Hero from "./hero";

const Home = async () => {
  const topAnimeList = await Jikan.topList();
  const currentSeasonList = await Jikan.seasonList();

  return (
    <section className="grid gap-10">
      <Hero seasonList={currentSeasonList} />
      <Row list={currentSeasonList} title="Current season" />
      <Row list={topAnimeList} title="Top anime" />
    </section>
  );
};

export default Home;
