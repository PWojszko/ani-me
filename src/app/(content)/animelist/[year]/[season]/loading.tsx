import Skeletons from "@/components/Loaders/Skeletons";

const LodingAnimeList = () => {
  return (
    <Skeletons
      className="object-cover rounded-md"
      amount={24}
      keyPrefix="animelist"
    />
  );
};

export default LodingAnimeList;
