"use client";

import Link from "next/link";
import { useState } from "react";

const AuthNavbarUnauthorized = () => {
  const [isRedirecting, setIsRedirecting] = useState(false);

  return (
    <Link
      href="/api/auth/login"
      onClick={() => setIsRedirecting(true)}
      className={`mx-auto ${
        isRedirecting ? "animate-pulse pointer-events-none" : ""
      }`}
    >
      Login
    </Link>
  );
};

export default AuthNavbarUnauthorized;
