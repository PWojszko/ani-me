"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "../Loaders/Skeleton";
import { useState } from "react";

const AuthNavbar = () => {
  const { user, isLoading, error } = useUser();
  const [isRediceting, setIsRediceting] = useState(false);

  if (isLoading) {
    return <Skeleton className="p-4 w-full h-full rounded-full" />;
  }

  if (error) {
    return null;
  }

  return (
    <div className="flex place-items-center place-content-between gap-4 p-4 w-full h-full bg-neutral-800 rounded-full">
      {!user && (
        <Link
          href="/api/auth/login"
          onClick={() => setIsRediceting(true)}
          className={`mx-auto ${
            isRediceting ? "animate-pulse pointer-events-none" : ""
          }`}
        >
          Login
        </Link>
      )}

      {user?.picture && user?.name && (
        <>
          <Link
            href="/api/auth/logout"
            onClick={() => setIsRediceting(true)}
            className={`${
              isRediceting ? "animate-pulse pointer-events-none" : ""
            }`}
          >
            Logout
          </Link>

          <Image
            className="object-cover rounded-full"
            src={user.picture}
            alt={user.name}
            width={32}
            height={32}
          />
        </>
      )}
    </div>
  );
};

export default AuthNavbar;
