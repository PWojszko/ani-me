import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button/Button";
import Jikan from "@/vendor/jikan/jikan";

const HeroAsync = async () => {
  const anime = await Jikan.getSeasonNow();

  return (
    <>
      <div className="flex flex-col gap-4 max-w-xs text-right">
        <h2 className="text-shadow">{anime?.data?.[0].title_english}</h2>
        <p className="text-shadow limited-text-lines-9">
          {anime?.data?.[0].synopsis}
        </p>
        <div className="mt-auto">
          <Link href={`/anime/${anime?.data?.[0].mal_id}`}>
            <Button>Read more</Button>
          </Link>
        </div>
      </div>

      {anime?.data?.[0].images.webp.image_url && (
        <Image
          className="w-64 h-96 object-cover"
          src={anime?.data?.[0].images.webp.image_url}
          alt="red latern on street"
          width={256}
          height={384}
        />
      )}
    </>
  );
};

export default HeroAsync;
