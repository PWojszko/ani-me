import Description from "./_Description/Description";
import Related from "./_Related/Related";
import Parameters from "./_Parameters/Parameters";
import Video from "./_Video/Video";
import jikan from "@/app/api/jikan/jikan";

type AnimeAsyncProps = {
  mal_id: string;
};

const AnimeAsync = async ({ mal_id }: AnimeAsyncProps) => {
  const anime = await jikan.animeById(mal_id);
  // if (!anime?.data) throw new Error("Anime not found");

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
