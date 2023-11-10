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
              <LoginForm />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default MyAccountPage;

