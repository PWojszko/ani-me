"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Skeleton from "../Skeleton/Skeleton";
import AuthNavbarUnauthorized from "./AuthNavBarUnauthorized";
import AuthNavbarAuthorized from "./AuthNavBarAuthorized";

const AuthNavbar = () => {
  const { user, isLoading, error } = useUser();

  if (isLoading) {
    return <Skeleton className="p-4 w-full h-full rounded-full" />;
  }

  if (error) {
    return null;
  }

  return (
    <div className="flex place-items-center place-content-between gap-4 p-4 w-full h-full bg-neutral-800 rounded-full">
      {!user && <AuthNavbarUnauthorized />}
      {user && <AuthNavbarAuthorized user={user} />}
    </div>
  );
};

export default AuthNavbar;
