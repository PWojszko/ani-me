import TextSkeleton from "@/components/Skeleton/TextSkeleton";

const ParametersSkeleton = () => {
  return (
    <div className="flex gap-4 justify-between">
      <div className="grid place-items-center w-24">
        <TextSkeleton variant="h3" />
        <TextSkeleton variant="h1" />
      </div>

      <div className="grid place-items-center w-24">
        <TextSkeleton variant="h3" />
        <TextSkeleton variant="h1" />
      </div>

      <div className="grid place-items-center w-24">
        <TextSkeleton variant="h3" />
        <TextSkeleton variant="h1" />
      </div>
    </div>
  );
};

export default ParametersSkeleton;
