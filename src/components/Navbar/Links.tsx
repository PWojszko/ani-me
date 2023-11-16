import {
  AiOutlineUnorderedList,
  AiOutlineLogin,
  AiOutlineUserAdd,
} from "react-icons/ai";

const NavLinks = [
  {
    href: "/animelist/2023/winter",
    icon: <AiOutlineUnorderedList />,
    text: "Browse anime",
  },
  {
    href: "/login",
    icon: <AiOutlineLogin />,
    text: "Log in",
  },
  {
    href: "/register",
    icon: <AiOutlineUserAdd />,
    text: "Register",
  },
];

export default NavLinks;
