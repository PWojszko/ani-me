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
        <div key={`AnimeList-${anime.mal_id}`}>
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
    </>
  );
};
export default AnimeList;
