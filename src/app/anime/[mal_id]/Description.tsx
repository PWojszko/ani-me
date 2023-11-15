import Image from "next/image";
import Watermark from "@/components/Watermark";
import { Anime } from "@/vendor/jikan/jikanTypes";

type DescriptionProps = {
  anime?: Anime;
};

const Description = ({ anime }: DescriptionProps) => {
  return (
    <div className="flex flex-col lg:flex-row place-items-center gap-8 justify-between">
      <Watermark>{anime?.title_japanese ?? anime?.title}</Watermark>

      <div className="flex flex-col gap-4">
        <h1 className="font-semibold text-4xl">{anime?.title}</h1>
        <p>{anime?.synopsis}</p>
      </div>

      {anime?.images.webp.image_url && (
        <Image
          className="object-cover w-64 h-96"
          src={anime?.images.webp.image_url}
          alt={anime?.title}
          width={300}
          height={300}
        />
      )}
    </div>
  );
};

export default Description;
