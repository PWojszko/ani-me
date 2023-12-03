import ButtonSkeleton from "@/components/Button/ButtonSkeleton";
import Skeleton from "@/components/Skeleton/Skeleton";
import TextSkeleton from "@/components/Skeleton/TextSkeleton";

const HeroSkeleton = () => {
  return (
    <>
      <div className="flex flex-col flex-1 gap-4 max-w-xs">
        <TextSkeleton variant="h2" />
        <div>
          <TextSkeleton variant="p" />
          <TextSkeleton variant="p" />
          <TextSkeleton variant="p" />
          <TextSkeleton variant="p" />
          <TextSkeleton variant="p" />
          <TextSkeleton variant="p" />
        </div>

        <div className="mt-auto">
          <ButtonSkeleton className="float-right">Read more</ButtonSkeleton>
        </div>
      </div>

      <Skeleton className="w-64 h-96 object-cover" />
    </>
  );
};

export default HeroSkeleton;
