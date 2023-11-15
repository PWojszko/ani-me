import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineUnorderedList,
  AiOutlineLogin,
  AiOutlineUserAdd,
} from "react-icons/ai";

const SmallBottomNavbar = () => {
  return (
    <nav className="bg-neutral-950 flex px-4 py-8 gap-4 place-content-center">
      <Link
        href="/animelist/2023/winter"
        className="grid gap-1 place-items-center flex-1"
      >
        <AiOutlineUnorderedList className="text-xl group-hover:text-red-700 duration-150" />
        Browse anime
      </Link>

      <Link href="/auth/login" className="grid gap-1 place-items-center flex-1">
        <AiOutlineLogin className="text-xl group-hover:text-red-700 duration-150" />
        Log in
      </Link>

      <Link
        href="/auth/register"
        className="grid gap-1 place-items-center flex-1"
      >
        <AiOutlineUserAdd className="text-xl group-hover:text-red-700 duration-150" />
        Register
      </Link>
    </nav>
  );
};

export default SmallBottomNavbar;
