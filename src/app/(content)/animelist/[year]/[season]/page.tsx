import { Seasons } from "@/app/(content)/animelist/[year]/[season]/_SeasonPicker/SeasonPickerRoll";
import Jikan from "@/vendor/jikan/jikan";
import Image from "next/image";
import Link from "next/link";

type AnimeListParams = {
  params: {
    year: string;
    season: Seasons;
  };
};

const AnimeList = async ({ params }: AnimeListParams) => {
  const seasonList = await Jikan.getSeason(params.year, params.season);

  return (
    <>
      {seasonList?.data?.map((anime) => (
        <Link href={`/anime/${anime.mal_id}`} key={`AnimeList-${anime.mal_id}`}>
          <Image
            className="object-cover rounded-md w-full h-full"
            src={anime.images.webp.image_url}
            alt={anime.title}
            width={225}
            height={319}
          />
        </Link>
      ))}
    </>
  );
};
export default AnimeList;
