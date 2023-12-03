import Image from "next/image";
import Carousel from "@/components/Carousel/Carousel";
import { Character } from "@/vendor/jikan/jikanTypes";

type CharactersProps = {
  characters?: Character[];
};

const Characters = ({ characters }: CharactersProps) => {
  return (
    <Carousel>
      {characters?.map((character) => (
        <div
          key={`character-${character.character.mal_id}`}
          className="relative h-full w-full"
        >
          <Image
            className="relative inset-0 h-full object-cover"
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
  );
};

export default Characters;
