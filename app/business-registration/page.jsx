import { Fragment } from "react";
import SubHeader from "../(components)/Subheader";
import BusinessRegisterForm from "../(components)/BusinessRegisterForm";

export const metadata = {
    title: "Businesses Sign Up | The Hyfin",
    description:
      "businesses, Sign up on The Hyfin, the biggest and most reliable listing of services targeted to thrive entrepreneurs and business owners",
  };

const BusinessesRegistrationPage = () => {

  return (
    <Fragment>
        <SubHeader pagetitle="Businesses Sign Up" />
        <BusinessRegisterForm />
    </Fragment>
  )
}

export default BusinessesRegistrationPage