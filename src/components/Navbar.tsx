import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineUnorderedList,
  AiOutlineLogin,
  AiOutlineUserAdd,
} from "react-icons/ai";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav className="bg-neutral-950 ">
      <div className="flex flex-col gap-6 p-4 sticky top-4">
        <div className="mx-auto">
          <Link href="/">
            <Image src="/logo.webp" width={85} height={44} alt="ani-me logo" />
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <NavLink url="/animelist">
            <AiOutlineUnorderedList className="text-xl group-hover:text-red-700 duration-150" />{" "}
            Browse anime
          </NavLink>

          <NavLink url="/auth/login">
            <AiOutlineLogin className="text-xl group-hover:text-red-700 duration-150" />{" "}
            Log in
          </NavLink>

          <NavLink url="/auth/register">
            <AiOutlineUserAdd className="text-xl group-hover:text-red-700 duration-150" />{" "}
            Register
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
