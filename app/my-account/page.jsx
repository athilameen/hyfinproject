import { Fragment } from "react";
import SubHeader from "../(components)/Subheader";
import LoginForm from "../(components)/Loginform";

export const metadata = {
  title: "My Account | Find the right business partners",
  description:
    "Register on The Hyfin and get access to an unlimited number of service providers for your business all on one simple, user-friendly platform.",
};

const MyAccountPage = (props) => {
  return (
    <Fragment>
      <SubHeader pagetitle="My Account" />
      <section className="contact-pg-sec">
        <div className="myContainer">
          <div className="row">
            <div className="page-template-myaccount left">
              <div id="form">
                <div className="frm_forms frm_style_formidable-style frm_login_form">
                  <div id="user-registration" className="user-registration">
                    <div
                      className="ur-frontend-form login"
                      id="ur-frontend-form"
                    >
                      <LoginForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default MyAccountPage;
