import RotatedTitle from "@/components/RotatedTitle";
import SeasonPicker from "./[year]/[season]/_SeasonPicker/SeasonPicker";

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-10 px-16 py-12">
      <RotatedTitle>Browse anime</RotatedTitle>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        <SeasonPicker />
        {children}
      </div>
    </div>
  );
}
