import { Suspense } from "react";
import RotatedTitle from "@/components/RotatedTitle";
import type { Seasons } from "./_SeasonPicker/SeasonPickerRoll";
import Cards from "./Cards";
import SeasonPicker from "./_SeasonPicker/SeasonPicker";

type CardsParams = {
  params: {
    year: string;
    season: Seasons;
  };
};

const AnimeList = ({ params }: CardsParams) => {
  return (
    <div className="grid gap-10 px-16 py-12">
      <RotatedTitle>Browse anime</RotatedTitle>

      <Suspense fallback={"Loading..."}>
        <SeasonPicker year={params.year} seasons={params.season} />
      </Suspense>

      <Suspense fallback={"Loading..."}>
        <Cards year={params.year} season={params.season} />
      </Suspense>
    </div>
  );
};

export default AnimeList;
