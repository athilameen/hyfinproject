"use client";

import { useSession } from "next-auth/react";
import LoginFormArea from "./LoginFormArea";
import DashboardArea from "./DashboardArea";

const MyAccountArea = (props) => {
  const session = useSession();
  const sessionUserData = session.data;

  if (session.status === "loading") {
    return <div>Loading....</div>;
  } else if (session.status === "authenticated") {
    return (
      <div className="user-registration-account left">
        <div id="form" className="dashboardArea">
          <div className="frm_forms frm_style_formidable-style frm_login_form">
            <div
              id="user-registration"
              className="user-registration horizontal"
            >
              <DashboardArea username={sessionUserData?.user.name} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <LoginFormArea />;
  }
};

export default MyAccountArea;
