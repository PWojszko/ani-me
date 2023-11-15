import Jikan from "@/vendor/jikan/jikan";
import Row from "./Row";
import Hero from "./Hero";
import { SeasonNow } from "@/vendor/jikan/jikanTypes";

const getRandomAnime = (list?: SeasonNow) => {
  return list?.data?.[Math.floor(Math.random() * list.data?.length)];
};

const Home = async () => {
  const topAnime = await Jikan.getTopAnime();
  const seasonNow = await Jikan.getSeasonNow();

  return (
    <section className="grid gap-10">
      <Hero anime={getRandomAnime(seasonNow)} />
      <Row list={seasonNow} title="Current season" />
      <Row list={topAnime} title="Top anime" />
    </section>
  );
};

export default Home;
