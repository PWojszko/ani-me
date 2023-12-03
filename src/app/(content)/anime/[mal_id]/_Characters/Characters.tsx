import { Suspense } from "react";
import CharactersAsync from "./CharactersAsync";
import CharactersSkeleton from "./CharactersSkeleton";

type CharactersProps = {
  mal_id: string;
};

const Characters = ({ mal_id }: CharactersProps) => {
  return (
    <Suspense fallback={<CharactersSkeleton />}>
      <CharactersAsync mal_id={mal_id} />
    </Suspense>
  );
};

export default Characters;
