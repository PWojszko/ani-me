import Characters from "./_Characters/Characters";
import Anime from "./_Anime/Anime";

type AnimePageProps = {
  params: {
    mal_id: string;
  };
};

const AnimePage = ({ params }: AnimePageProps) => {
  return (
    <section className="flex flex-col gap-10 px-16 py-12">
      <Anime mal_id={params.mal_id} />
      <Characters mal_id={params.mal_id} />
    </section>
  );
};

export default AnimePage;
