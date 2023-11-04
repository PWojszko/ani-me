import Spinner from "@/components/Spinner";

export default function Loading() {
  return (
    <div className="absolute inset-0 flex place-items-center place-content-center">
      <Spinner />
    </div>
  );
}
