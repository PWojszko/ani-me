import RotatedTitle from "@/components/RotatedTitle";
import SeasonPicker from "../../../components/SeasonPicker/SeasonPicker";

type AnimeListLayoutProps = {
  children: React.ReactNode;
};

const AnimeListLayout = ({ children }: AnimeListLayoutProps) => {
  return (
    <div className="grid gap-10 px-16 py-12">
      <RotatedTitle>Browse anime</RotatedTitle>

      <div className="grid gap-4 grid-cols-repeat-56 auto-rows-80 grid-flow-row justify-center">
        <SeasonPicker />
        {children}
      </div>
    </div>
  );
};

export default AnimeListLayout;
