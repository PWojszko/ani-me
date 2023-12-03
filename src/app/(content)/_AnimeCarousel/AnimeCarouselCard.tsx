"use client";

import { Variants, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Anime } from "@/vendor/jikan/jikanTypes";

const variants: Record<string, Variants> = {
  title: {
    active: { opacity: 1 },
    inactive: { opacity: 0 },
  },

  image: {
    active: { scale: 1.1, opacity: 0.5 },
    inactive: { scale: 1, opacity: 1 },
  },
};

const AnimeCarouselCard = ({ anime }: { anime: Anime }) => {
  return (
    <motion.div
      initial="inactive"
      animate="inactive"
      whileHover="active"
      key={anime.mal_id}
      className="relative h-80 w-56 rounded-xl overflow-hidden"
    >
      <Link href={`/anime/${anime.mal_id}`}>
        <motion.div variants={variants.image}>
          <Image
            className="h-80 w-56 object-cover"
            src={anime.images.webp.image_url}
            alt={anime.title}
            width={224}
            height={320}
          />
        </motion.div>

        <motion.div
          variants={variants.title}
          className="absolute flex items-end inset-0 p-6"
        >
          <p className="relative p-4 font-bold text-lg text-shadow border-l-4 border-red-700">
            {anime.title}
          </p>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default AnimeCarouselCard;
