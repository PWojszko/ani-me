import Jikan from "@/vendor/jikan/jikan";
import SeasonPickerRoll, { Seasons } from "./SeasonPickerRoll";

const SeasonPicker = async () => {
  const seasonsList = await Jikan.getSeasonsList();

  return <SeasonPickerRoll seasons={seasonsList} />;
};

export default SeasonPicker;
