import Skeleton from "@/components/Skeleton/Skeleton";
import TextSkeleton from "@/components/Skeleton/TextSkeleton";
import Watermark from "@/components/Watermark";

const DescriptionSkeleton = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 justify-between">
      <Watermark>Loading...</Watermark>

      <div className="flex flex-col gap-4 flex-1">
        <TextSkeleton variant="h1" className="w-3/4" />

        <div>
          <TextSkeleton variant="p" />
          <TextSkeleton variant="p" />
          <TextSkeleton variant="p" />
          <TextSkeleton variant="p" />
          <TextSkeleton variant="p" />
          <TextSkeleton variant="p" />
        </div>
      </div>

      <Skeleton className="w-64 h-96" />
    </div>
  );
};

export default DescriptionSkeleton;
