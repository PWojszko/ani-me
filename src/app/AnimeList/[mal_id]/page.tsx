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
        <Watermark>
          {anime?.data?.title_japanese ?? anime?.data?.title}
        </Watermark>

        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-4xl">{anime?.data?.title}</h1>
          <p>{anime?.data?.synopsis}</p>
        </div>

        {anime?.data?.images.webp.image_url && (
          <Image
            src={anime?.data?.images.webp.image_url}
            alt={anime?.data?.title}
            width={300}
            height={300}
          />
        )}
      </div>

      <div className="grid grid-cols-3 grid-flow-row gap-4 justify-between">
        {anime?.data?.relations.map(
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
          {characters?.data?.map((character) => (
            <div
              key={`character-${character.character.mal_id}`}
              className="relative h-full w-full"
            >
              <Image
                className="relative inset-0 object-cover"
                src={character.character.images.webp.image_url}
                alt="character"
                width={225}
                height={350}
              />
              <p className="absolute bottom-4 left-4 text-shadow">
                {character.character.name
                  .split(",")
                  .slice(0, 2)
                  .reverse()
                  .join(" ")}
              </p>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="flex gap-4 justify-between">
        <div className="grid place-items-center">
          <span className="text-lg">Score</span>
          <span className="text-red-700 font-bold text-2xl">
            {anime?.data?.score}
          </span>
        </div>

        <div className="grid place-items-center">
          <span className="text-lg">Type</span>
          <span className="text-red-700 font-bold text-2xl">
            {anime?.data?.type}
          </span>
        </div>

        <div className="grid place-items-center">
          <span className="text-lg">Episodes</span>
          <span className="text-red-700 font-bold text-2xl">
            {anime?.data?.episodes}
          </span>
        </div>
      </div>

      <div>
        <iframe
          src={`https://www.youtube.com/embed/${anime?.data?.trailer.youtube_id}?autoplay=0`}
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
