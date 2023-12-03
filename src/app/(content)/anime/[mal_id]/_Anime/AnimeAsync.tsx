import Jikan from "@/vendor/jikan/jikan";
import Description from "./_Description/Description";
import Related from "./_Related/Related";
import Parameters from "./_Parameters/Parameters";
import Video from "./_Video/Video";

type AnimeAsyncProps = {
  mal_id: string;
};

const AnimeAsync = async ({ mal_id }: AnimeAsyncProps) => {
  const anime = await Jikan.animeById(mal_id);

  return (
    <>
      <Description anime={anime?.data} />
      <Related anime={anime?.data} />
      <Parameters anime={anime?.data} />
      <Video anime={anime?.data} />
    </>
  );
};

export default AnimeAsync;
