import jikan from "@/vendor/jikan/jikan";
import SeasonsPicker from "./seasonsPicker";
import Cards from "./cards";

const AnimeList = async () => {
  const seasonsList = await jikan.getSeasonsList();

  return (
    <section className="grid gap-10 px-16 py-12">
      {seasonsList && <SeasonsPicker seasons={seasonsList} />}
    </section>
  );
};

export default AnimeList;
