"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

interface IAuthContextProps {
  children: ReactNode;
}

export default function AuthContext({ children }: IAuthContextProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
