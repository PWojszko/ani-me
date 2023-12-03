import DescriptionSkeleton from "./_Description/DescriptionSkeleton";
import ParametersSkeleton from "./_Parameters/ParametersSkeleton";
import RelatedSkeleton from "./_Related/RelatedSkeleton";
import VideoSkeleton from "./_Video/VideoSkeleton";

const AnimeSkeleton = () => {
  return (
    <>
      <DescriptionSkeleton />
      <RelatedSkeleton />
      <ParametersSkeleton />
      <VideoSkeleton />
    </>
  );
};

export default AnimeSkeleton;
