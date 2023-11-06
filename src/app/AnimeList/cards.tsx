import jikan from "@/vendor/jikan/jikan";
import { Season } from "@/vendor/jikan/jikanTypes";
import Image from "next/image";
import { useEffect, useState } from "react";

type CardsProps = {
  seletedYear: number;
  selectedSeason: "winter" | "spring" | "summer" | "fall";
};

const Cards = ({ seletedYear, selectedSeason }: CardsProps) => {
  const [season, setSeason] = useState<Season>();

  useEffect(() => {
    jikan
      .getSeason(seletedYear, selectedSeason)
      .then((season) => setSeason(season));
  }, [seletedYear, selectedSeason]);

  console.log(season);

  return (
    <div className="grid  gap-4 md:grid-cols-2 lg:grid-cols-3 xl:lg:grid-cols-4 2xl:lg:grid-cols-6">
      {season?.data?.map((anime) => (
        <div key={`cards-${anime.mal_id}`}>
          <Image
            className="w-full h-full object-cover rounded-md"
            src={anime.images.webp.image_url}
            alt={anime.title}
            width={225}
            height={319}
          />
        </div>
      ))}
    </div>
  );
};
export default Cards;
