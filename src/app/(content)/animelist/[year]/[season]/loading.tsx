import Skeletons from "@/components/Skeleton/Skeletons";

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
