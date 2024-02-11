"use client";

import Image from "next/image";
import HeroAsync from "./HeroAsync";
import { Suspense } from "react";
import HeroSkeleton from "./HeroSkeleton";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-end max-h-fit">
      <Image
        className="absolute object-cover object-center w-full h-full brightness-50 mask-image-transparent-gradient"
        src="/hero-bg.webp"
        alt="red lantern on street"
        width={1920}
        height={500}
      />

      <div className="flex gap-6 w-full place-content-end px-16 py-36 z-10">
        <Suspense fallback={<HeroSkeleton />}>
          <HeroAsync />
        </Suspense>
      </div>
    </section>
  );
};

export default Hero;
