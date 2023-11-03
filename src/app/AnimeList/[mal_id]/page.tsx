import Link from "next/link";
import Image from "next/image";
import {
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiOutlineLink,
} from "react-icons/ai";
import Jikan from "@/vendor/jikan/jikan";
import Watermark from "@/components/Watermark";
import Button from "@/components/Button";
import Carousel from "@/components/Carousel";

const Anime = async ({ params }: { params: { mal_id: string } }) => {
  const anime = await Jikan.animeById(params.mal_id);
  const characters = await Jikan.characters(params.mal_id);

  return (
    <section className="flex flex-col gap-16 px-16 py-24">
      <div className="flex gap-4 justify-between">
        <Watermark>{anime.title_japanese ?? anime.title}</Watermark>

        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-4xl">{anime.title}</h1>
          <p>{anime.synopsis}</p>
        </div>

        <Image
          src={anime.images.webp.image_url}
          alt={anime.title}
          width={300}
          height={300}
        />
      </div>

      <div className="grid grid-cols-3 grid-flow-row gap-4 justify-between">
        {anime.relations.map(
          ({ relation, entry }) =>
            relation !== "Adaptation" && (
              <div key={`relation-${entry[0].mal_id}`} className="flex gap-4">
                <Link href={`/animelist/${entry[0].mal_id}`}>
                  <Button className="h-full">
                    {relation === "Sequel" ? (
                      <AiOutlineArrowRight className="text-xl" />
                    ) : relation === "Prequel" ? (
                      <AiOutlineArrowLeft className="text-xl" />
                    ) : (
                      <AiOutlineLink className="text-xl" />
                    )}
                  </Button>
                </Link>

                <div className="flex flex-col gap-4">
                  <div>
                    <p>{entry[0].type}</p>
                    <p className="text-xl font-bold">{relation}</p>
                  </div>

                  <p className="mt-auto">{entry[0].name}</p>
                </div>
              </div>
            )
        )}
      </div>

      <div>
        <Carousel>
          {characters.data.map((character) => (
            <div key={`character-${character.character.mal_id}`}>
              {character.character.name}
            </div>
          ))}
        </Carousel>
      </div>

      <div className="flex gap-4 justify-between">
        <div className="grid place-items-center">
          <span className="text-lg">Score</span>
          <span className="text-red-700 font-bold text-2xl">{anime.score}</span>
        </div>

        <div className="grid place-items-center">
          <span className="text-lg">Type</span>
          <span className="text-red-700 font-bold text-2xl">{anime.type}</span>
        </div>

        <div className="grid place-items-center">
          <span className="text-lg">Episodes</span>
          <span className="text-red-700 font-bold text-2xl">
            {anime.episodes}
          </span>
        </div>
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
