import Image from "next/image";
import Link from "next/link";
import Jikan from "@/vendor/jikan/jikan";
import { Seasons } from "../../../../../components/SeasonPicker/SeasonPickerRoll";

type AnimeListPageParams = {
  params: {
    year: string;
    season: Seasons;
  };
};

const AnimeListPage = async ({ params }: AnimeListPageParams) => {
  const seasonList = await Jikan.getSeason(params.year, params.season);

  return (
    <>
      {seasonList?.data?.map((anime) => (
        <Link href={`/anime/${anime.mal_id}`} key={`AnimeList-${anime.mal_id}`}>
          <Image
            className="w-56 h-80 object-cover rounded-md"
            src={anime.images.webp.image_url}
            alt={anime.title}
            width={224}
            height={320}
          />
        </Link>
      ))}
    </>
  );
};
export default AnimeListPage;
