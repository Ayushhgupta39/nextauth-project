"use client";

import { signOut } from "next-auth/react";

const LogoutPage = () => {
  return (
    <div>
        <button onClick={() => signOut()}>Sign out</button>
    </div>
  )
}

export default LogoutPage