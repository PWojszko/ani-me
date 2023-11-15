import Jikan from "@/vendor/jikan/jikan";
import SeasonsPicker from "./SeasonsPicker";
import type { Seasons } from "./SeasonsPicker";
import Cards from "./Cards";

type CardsParams = {
  params: {
    year: string;
    season: Seasons;
  };
};

const AnimeList = async ({ params }: CardsParams) => {
  const seasonsList = await Jikan.getSeasonsList();
  const season = await Jikan.getSeason(params.year, params.season);

  return (
    <section className="grid gap-10 px-16 py-12">
      <SeasonsPicker
        seasons={seasonsList}
        yearParam={params.year}
        seasonParam={params.season}
      />
      <Cards season={season} />
    </section>
  );
};

export default AnimeList;
