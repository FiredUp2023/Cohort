'use client';
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode
}

const Providers: React.FC<Props> = ({ children }) => {
    return (
      <SessionProvider>
        {children}
      </SessionProvider>
    )
}

export default Providers
