import Image from "next/image";
import Carousel from "@/components/Carousel";
import { SeasonAnimeList, TopAnimeList } from "@/vendor/jikan/jikanTypes";
import Link from "next/link";

type RowProps = {
  list: TopAnimeList | SeasonAnimeList;
  title: string;
};

const Row = ({ list, title }: RowProps) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center relative">
        <h2 className="p-2 writing-vertical-rl text-2xl font-semibold">
          {title}
        </h2>
        <div
          className="flex-1 bg-red-700 w-px"
          style={{
            writingMode: "vertical-rl",
          }}
        ></div>
      </div>

      <Carousel>
        {list.data.map((item) => (
          <div
            key={item.mal_id}
            className="relative hover:scale-105 duration-300 h-full w-full"
          >
            <Link href={`/AnimeList/${item.mal_id}`}>
              <Image
                className="object-cover h-full w-full"
                src={item.images.webp.image_url}
                alt={item.title}
                width={200}
                height={200}
              />

              <div className="flex items-end p-6 absolute inset-0 opacity-0 hover:opacity-100 duration-300 before:opacity-50 before:content-[''] before:absolute before:inset-0 before:bg-black">
                <p className="relative p-4 font-bold text-lg">
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-red-700" />
                  {item.title}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Row;
