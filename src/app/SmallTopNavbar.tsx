import Image from "next/image";
import Link from "next/link";

const SmallBottomNavbar = () => {
  return (
    <nav className="bg-neutral-950 h-full w-full">
      <div className="flex flex-col gap-6 p-4 sticky top-4">
        <div className="mx-auto">
          <Link href="/">
            <Image src="/logo.webp" width={85} height={44} alt="ani-me logo" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SmallBottomNavbar;
