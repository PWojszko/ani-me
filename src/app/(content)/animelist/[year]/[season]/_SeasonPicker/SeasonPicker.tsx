import Jikan from "@/vendor/jikan/jikan";
import SeasonPickerRoll, { Seasons } from "./SeasonPickerRoll";

type SeasonPickerProps = {
  year: string;
  seasons: Seasons;
};

const SeasonPicker = async ({ year, seasons }: SeasonPickerProps) => {
  const seasonsList = await Jikan.getSeasonsList();

  return (
    <SeasonPickerRoll
      seasons={seasonsList}
      yearParam={year}
      seasonParam={seasons}
    />
  );
};

export default SeasonPicker;
