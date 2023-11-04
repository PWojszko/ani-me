import Image from "next/image";
import { Anime } from "@/vendor/jikan/jikanTypes";
import Button from "@/components/Button";
import Link from "next/link";

type HeroProps = {
  anime: Anime;
};

const Hero = ({ anime }: HeroProps) => {
  return (
    <section className="relative flex items-center justify-end max-h-fit after:content=[''] after:absolute after:bg-neutral-900 after:inset-0 after:opacity-60">
      <Image
        className="absolute object-cover object-center w-full h-full"
        src="/hero-bg.webp"
        alt="red latern on street"
        width={1920}
        height={500}
      />

      <div className="flex gap-6 text-right px-16 py-36 z-10">
        <div className="flex flex-col gap-4 max-w-xs">
          <p className="font-bold text-2xl text-shadow">
            {anime.title_english}
          </p>
          <p className="text-shadow">{anime.synopsis.slice(0, 100) + "..."}</p>
          <div className="mt-auto">
            <Link href={`/animelist/${anime.mal_id}`}>
              <Button>Read more</Button>
            </Link>
          </div>
        </div>

        <Image
          src={anime.images.webp.image_url}
          alt="red latern on street"
          width={300}
          height={300}
        />

        <div className="absolute top-36 bottom-16 right-10 w-0.5 bg-red-700" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-neutral-950" />
    </section>
  );
};

export default Hero;
