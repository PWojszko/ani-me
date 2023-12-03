import { AiOutlineArrowRight } from "react-icons/ai";
import ButtonSkeleton from "@/components/Button/ButtonSkeleton";
import TextSkeleton from "@/components/Skeleton/TextSkeleton";

const RelatedSkeleton = () => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid-flow-row gap-4 justify-between">
      {[...Array(4)].map((_, i) => (
        <div className="flex gap-4" key={`related-skeleton-${i}`}>
          <ButtonSkeleton className="h-full">
            <AiOutlineArrowRight className="text-xl" />
          </ButtonSkeleton>

          <div className="flex flex-col gap-4 flex-1">
            <div>
              <TextSkeleton variant="p" className="w-1/4" />
              <TextSkeleton variant="h2" className="w-2/4" />
            </div>

            <TextSkeleton variant="p" className="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RelatedSkeleton;
