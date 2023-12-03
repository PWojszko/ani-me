"use client";

import Button from "@/components/Button/Button";
import { useEffect } from "react";
import { AiFillWarning } from "react-icons/ai";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col p-4 gap-4 h-full place-items-center place-content-center">
      <AiFillWarning className="text-5xl text-red-700" />
      <h2>Something went wrong!</h2>
      <div>
        <Button onClick={reset}>Try again</Button>
      </div>
    </div>
  );
}
