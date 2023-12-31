"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

const DashboardNavigation = ({accountPage}) => {

  const session = useSession();
  const sessionUserData = session.data;
  const userRole = sessionUserData?.user.role;

  return (
    <nav className="user-registration-MyAccount-navigation">
      <ul>
      <li className={"user-registration-MyAccount-navigation-link user-registration-MyAccount-navigation-link--edit-password " + (accountPage === "dashboard" ? 'is-active' : '')}>
          <Link href="/my-account">Dashboard</Link>
        </li>
        {
          userRole === "business" && (
            <li className={"user-registration-MyAccount-navigation-link user-registration-MyAccount-navigation-link--edit-password " + (accountPage === "services" ? 'is-active' : '')}>
              <Link href="/my-account/services">Services</Link>
            </li>
          )
        }
        <li className={"user-registration-MyAccount-navigation-link user-registration-MyAccount-navigation-link--edit-password " + (accountPage === "change-password" ? 'is-active' : '')}>
          <Link href="/my-account/change-password">Change Password</Link>
        </li>
        <li className="user-registration-MyAccount-navigation-link user-registration-MyAccount-navigation-link--user-logout">
            <LogoutButton />
        </li>
      </ul>
    </nav>
  );
};

export default DashboardNavigation;
