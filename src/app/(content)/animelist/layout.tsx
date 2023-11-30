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
      <div className="grid gap-4 grid-cols-repeat-64 auto-rows-96 grid-flow-row justify-center">
        <SeasonPicker />
        {children}
      </div>
    </div>
  );
}
