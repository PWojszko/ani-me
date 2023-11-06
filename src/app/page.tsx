import Jikan from "@/vendor/jikan/jikan";
import Row from "./row";
import Hero from "./hero";
import { SeasonNow } from "@/vendor/jikan/jikanTypes";

const getRandomAnime = (list: SeasonNow) => {
  return list.data[Math.floor(Math.random() * list.data?.length)];
};

const Home = async () => {
  const topAnime = await Jikan.getTopAnime();
  const seasonNow = await Jikan.getSeasonNow();

  return (
    <section className="grid gap-10">
      {seasonNow && <Hero anime={getRandomAnime(seasonNow)} />}
      {seasonNow && <Row list={seasonNow} title="Current season" />}
      {topAnime && <Row list={topAnime} title="Top anime" />}
    </section>
  );
};

export default Home;
