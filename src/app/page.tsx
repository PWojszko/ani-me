import Jikan from "@/vendor/jikan/jikan";
import Row from "./row";
import Hero from "./hero";
import { SeasonAnimeList } from "@/vendor/jikan/jikanTypes";

const getRandomAnime = (list: SeasonAnimeList) => {
  return list.data[Math.floor(Math.random() * list.data?.length)];
};

const Home = async () => {
  const topAnimeList = await Jikan.topList();
  const currentSeasonList = await Jikan.seasonList();

  return (
    <section className="grid gap-10">
      {currentSeasonList && <Hero anime={getRandomAnime(currentSeasonList)} />}
      {currentSeasonList && (
        <Row list={currentSeasonList} title="Current season" />
      )}
      {topAnimeList && <Row list={topAnimeList} title="Top anime" />}
    </section>
  );
};

export default Home;
