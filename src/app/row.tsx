"use client";

import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import { TopAnime, SeasonNow } from "@/vendor/jikan/jikanTypes";
import { useState } from "react";
import { MotionValue, motion } from "framer-motion";

type RowProps = {
  list?: TopAnime | SeasonNow;
  title: string;
};

const Row = ({ list, title }: RowProps) => {
  const [progress, setProgress] = useState<MotionValue<number> | null>(null);

  return (
    <div className="flex relative">
      <div className="flex flex-col items-center relative -bottom-4">
        <h2 className="p-2 w-12 writing-vertical-rl">{title}</h2>
        <div
          className="flex-1 bg-red-700 w-0.5"
          style={{
            writingMode: "vertical-rl",
          }}
        ></div>
      </div>

      <Carousel setProgress={setProgress}>
        {list?.data.map((anime) => (
          <div
            key={anime.mal_id}
            className="relative hover:scale-105 duration-300 h-full w-full"
          >
            <Link href={`/anime/${anime.mal_id}`}>
              <Image
                className="object-cover h-full w-full"
                src={anime.images.webp.image_url}
                alt={anime.title}
                width={225}
                height={325}
              />

              <div className="flex items-end p-6 absolute inset-0 opacity-0 hover:opacity-100 duration-300 before:opacity-50 before:content-[''] before:absolute before:inset-0 before:bg-black">
                <p className="relative p-4 font-bold text-lg text-shadow">
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-red-700" />
                  {anime.title}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </Carousel>

      {progress && (
        <motion.div
          style={{ scaleX: progress }}
          className="absolute h-0.5 left-6 right-0 -bottom-4  bg-red-700 origin-left"
        />
      )}
    </div>
  );
};

export default Row;
