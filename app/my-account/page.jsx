import { Fragment } from "react";
import SubHeader from "../(components)/Subheader";
import MyAccountArea from "../(components)/MyAccountArea";

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
            <MyAccountArea />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default MyAccountPage;

