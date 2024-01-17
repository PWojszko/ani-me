"use client";

import { UserProfile } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const AuthNavbarAuthorized = ({ user }: { user: UserProfile }) => {
  const [isRedirecting, setIsRedirecting] = useState(false);

  return (
    <>
      <Link
        href="/api/auth/logout"
        onClick={() => setIsRedirecting(true)}
        className={`${
          isRedirecting ? "animate-pulse pointer-events-none" : ""
        }`}
      >
        Logout
      </Link>

      {user.picture && user.name && (
        <Link href="/profile">
          <Image
            className="object-cover rounded-full"
            src={user.picture}
            alt={`${user.name} profile picture`}
            width={32}
            height={32}
          />
        </Link>
      )}
    </>
  );
};

export default AuthNavbarAuthorized;
