'use client';
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

type Props = {

}

const AppBar: React.FC<Props> = () => {
  const session = useSession();
  return (
    <div className="w-screen flex justify-center gap-x-4">
      <button
        onClick={() => signIn()}
        className="bg-blue-500 rounded-lg px-4 py-2"
      >
        Signin
      </button>
      <button
        onClick={() => signOut()}
        className="bg-blue-500 rounded-lg px-4 py-2"
      >
        SignOut
      </button>
      {JSON.stringify(session)}
    </div>
  )
}

export default AppBar
