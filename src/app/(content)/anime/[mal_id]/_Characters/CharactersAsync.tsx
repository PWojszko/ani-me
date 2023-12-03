import Image from "next/image";
import Jikan from "@/vendor/jikan/jikan";
import Carousel from "@/components/Carousel/Carousel";

type CharactersAsyncProps = {
  mal_id: string;
};

const CharactersAsync = async ({ mal_id }: CharactersAsyncProps) => {
  const characters = await Jikan.characters(mal_id);

  return (
    <Carousel>
      {characters?.data?.map((character) => (
        <div
          key={`character-${character.character.mal_id}`}
          className="relative h-full w-full"
        >
          <Image
            className="w-56 h-80 object-cover"
            src={character.character.images.webp.image_url}
            alt="character"
            width={224}
            height={320}
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
  );
};

export default CharactersAsync;
