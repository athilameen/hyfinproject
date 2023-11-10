"use client";

import { useRouter } from 'next/navigation';
import { signOut } from "next-auth/react"

const LogoutButton = () => {

    const router = useRouter();

    function logouthandler(){
      signOut({callbackUrl: '/my-account'})
    }

  return (
      <a onClick={logouthandler}>Logout</a>
   
  )
}

export default LogoutButton