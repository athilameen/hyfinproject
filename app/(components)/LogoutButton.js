"use client";

import { useRouter } from 'next/navigation';
import { signOut } from "next-auth/react"

const LogoutButton = () => {

    const router = useRouter();

    function logouthandler(){
      signOut();
      router.replace('/');
    }

  return (
      <a onClick={logouthandler}>Logout</a>
   
  )
}

export default LogoutButton