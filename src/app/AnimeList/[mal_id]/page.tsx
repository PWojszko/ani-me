import Jikan from "@/vendor/jikan/jikan";
import Watermark from "@/components/Watermark";
import Image from "next/image";

const Anime = async ({ params }: { params: { mal_id: string } }) => {
  const anime = await Jikan.animeById(params.mal_id);

  return (
    <section className="flex flex-col gap-16 px-16 py-24">
      <div className="relative flex gap-4 justify-between">
        <Watermark>{anime.title_japanese ?? anime.title}</Watermark>

        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-xl">{anime.title}</h1>
          <p>{anime.synopsis}</p>
        </div>

        <Image
          src={anime.images.webp.image_url}
          alt={anime.title}
          width={300}
          height={300}
        />
      </div>

      <div className="flex gap-4 justify-between">
        <p>{anime.score}</p>
        <p>{anime.type}</p>
        <p>{anime.episodes}</p>
      </div>

      <div>
        <iframe
          src={`https://www.youtube.com/embed/${anime.trailer.youtube_id}?autoplay=0`}
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-96"
        />
      </div>
    </section>
  );
};

export default Anime;
