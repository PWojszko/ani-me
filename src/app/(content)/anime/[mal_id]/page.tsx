import Jikan from "@/vendor/jikan/jikan";
import Description from "./Description";
import Related from "./Related";
import Characters from "./Characters";
import Parameters from "./Parameters";
import Video from "./Video";

const Anime = async ({ params }: { params: { mal_id: string } }) => {
  const anime = await Jikan.animeById(params.mal_id);
  const characters = await Jikan.characters(params.mal_id);

  return (
    <section className="flex flex-col gap-10 px-16 py-12">
      <Description anime={anime?.data} />
      <Related anime={anime?.data} />
      <Characters characters={characters?.data} />
      <Parameters anime={anime?.data} />
      <Video anime={anime?.data} />
    </section>
  );
};

export default Anime;
