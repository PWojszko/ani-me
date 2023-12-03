import Skeleton from "@/components/Skeleton/Skeleton";
import { Anime } from "@/vendor/jikan/jikanTypes";

type VideoSkeletonProps = {
  anime?: Anime;
};

const VideoSkeleton = ({ anime }: VideoSkeletonProps) => {
  return <Skeleton className="w-full aspect-video" />;
};

export default VideoSkeleton;
