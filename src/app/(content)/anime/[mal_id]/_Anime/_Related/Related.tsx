import Link from "next/link";
import {
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiOutlineLink,
} from "react-icons/ai";
import { Anime } from "@/vendor/jikan/jikanTypes";
import Button from "@/components/Button/Button";

type RelatedProps = {
  anime?: Anime;
};

const Related = ({ anime }: RelatedProps) => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid-flow-row gap-4 justify-between">
      {anime?.relations.map(
        ({ relation, entry }) =>
          relation !== "Adaptation" && (
            <div key={`relation-${entry[0].mal_id}`} className="flex gap-4">
              <Link href={`/anime/${entry[0].mal_id}`}>
                <Button className="h-full">
                  {relation === "Sequel" ? (
                    <AiOutlineArrowRight className="text-xl" />
                  ) : relation === "Prequel" ? (
                    <AiOutlineArrowLeft className="text-xl" />
                  ) : (
                    <AiOutlineLink className="text-xl" />
                  )}
                </Button>
              </Link>

              <div className="flex flex-col gap-4 flex-1">
                <div>
                  <p>{entry[0].type}</p>
                  <p className="text-xl font-bold">{relation}</p>
                </div>

                <p className="mt-auto">{entry[0].name}</p>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default Related;
