"use client";

import Button from "@/components/Button/Button";
import { AiFillWarning } from "react-icons/ai";

type ContentErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const ContentError = ({ error, reset }: ContentErrorProps) => {
  return (
    <div className="flex flex-col p-4 gap-4 h-full place-items-center place-content-center">
      <AiFillWarning className="text-5xl text-red-700" />
      <h1>Something went wrong!</h1>
      <div>
        <Button onClick={reset}>Try again</Button>
      </div>
    </div>
  );
};

export default ContentError;
