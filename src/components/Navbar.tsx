import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-neutral-950">
      <Link href="/">
        <Image src="/logo.webp" width={122} height={74} alt="ani-me logo" />
      </Link>
    </nav>
  );
};

export default Navbar;
