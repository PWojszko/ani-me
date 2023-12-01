import { Anime } from "@/vendor/jikan/jikanTypes";

type VideoProps = {
  anime?: Anime;
};

const Video = ({ anime }: VideoProps) => {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${anime?.trailer.youtube_id}?autoplay=0`}
      title="YouTube video player"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full aspect-video"
    />
  );
};

export default Video;
