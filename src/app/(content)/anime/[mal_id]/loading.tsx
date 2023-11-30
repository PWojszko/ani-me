import Spinner from "@/components/Loaders/Spinner";

const LoadingAnimeByMalId = () => {
  return (
    <div className="w-full h-full place-items-center place-content-center flex">
      <Spinner />
    </div>
  );
};

export default LoadingAnimeByMalId;
