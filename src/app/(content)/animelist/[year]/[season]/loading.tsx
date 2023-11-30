import Skeletons from "@/components/Loaders/Skeletons";

const LodingAnimeList = () => {
  return (
    <Skeletons
      className="w-64 h-80 object-cover rounded-md"
      amount={24}
      keyPrefix="animelist"
    />
  );
};

export default LodingAnimeList;
