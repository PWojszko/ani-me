import { Anime } from "@/vendor/jikan/jikanTypes";

type ParametersProps = {
  anime?: Anime;
};

const Parameters = ({ anime }: ParametersProps) => {
  return (
    <div className="flex gap-4 justify-between">
      <div className="grid place-items-center w-24">
        <span className="text-lg">Score</span>
        <span className="text-red-700 font-bold text-2xl">{anime?.score}</span>
      </div>

      <div className="grid place-items-center w-24">
        <span className="text-lg">Type</span>
        <span className="text-red-700 font-bold text-2xl">{anime?.type}</span>
      </div>

      <div className="grid place-items-center w-24">
        <span className="text-lg">Episodes</span>
        <span className="text-red-700 font-bold text-2xl">
          {anime?.episodes}
        </span>
      </div>
    </div>
  );
};
export default Parameters;
