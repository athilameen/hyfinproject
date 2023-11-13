"use client";

import { useSession } from "next-auth/react";
import LoginFormArea from "./LoginFormArea";
import DashboardArea from "./DashboardArea";
import { useRouter } from "next/navigation";

const MyAccountArea = (props) => {

  const router = useRouter();

  const session = useSession();
  const sessionUserData = session.data;

  if (session.status === "loading") {
    return (<div className="flex justify-center py-10">
            <p>Loading....</p>
        </div>);
  } else if (session.status === "authenticated") {

    if(sessionUserData?.user.role === "admin"){
      router.push('/super-admin');
    } else {
      return (
        <div className="user-registration-account left">
          <div id="form" className="dashboardArea">
            <div className="frm_forms frm_style_formidable-style frm_login_form">
              <div
                id="user-registration"
                className="user-registration horizontal"
              >
                <DashboardArea email={sessionUserData?.user.email} username={sessionUserData?.user.name}  />
              </div>
            </div>
          </div>
        </div>
      );
    }
    
  } else {
    return <LoginFormArea />;
  }
};

export default MyAccountArea;
