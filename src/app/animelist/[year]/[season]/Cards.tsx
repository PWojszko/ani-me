import { Season } from "@/vendor/jikan/jikanTypes";
import Image from "next/image";
import Link from "next/link";

type CardsProps = {
  season?: Season;
};

const Cards = ({ season }: CardsProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
      {season?.data?.map((anime) => (
        <div key={`cards-${anime.mal_id}`}>
          <Link href={`/anime/${anime.mal_id}`}>
            <Image
              className="w-full h-full object-cover rounded-md"
              src={anime.images.webp.image_url}
              alt={anime.title}
              width={225}
              height={319}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};
export default Cards;
