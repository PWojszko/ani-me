import jikan from "@/vendor/jikan/jikan";
import SeasonsPicker from "./seasonsPicker";

const AnimeList = async () => {
  const seasons = await jikan.getSeasonsList();

  return (
    <section>
      {seasons && <SeasonsPicker seasons={seasons} />}
      <div></div>
    </section>
  );
};

export default AnimeList;
