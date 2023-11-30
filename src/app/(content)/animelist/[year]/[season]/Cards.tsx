import { Seasons } from "@/app/(content)/animelist/[year]/[season]/_SeasonPicker/SeasonPickerRoll";
import Jikan from "@/vendor/jikan/jikan";
import Image from "next/image";
import Link from "next/link";

type CardsProps = {
  year: string;
  season: Seasons;
};

const Cards = async ({ year, season }: CardsProps) => {
  const seasonList = await Jikan.getSeason(year, season);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
      {seasonList?.data?.map((anime) => (
        <div key={`cards-${anime.mal_id}`}>
          <Link href={`/anime/${anime.mal_id}`}>
            <Image
              className="w-64 h-80 object-cover rounded-md"
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
