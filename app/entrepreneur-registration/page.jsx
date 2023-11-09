import { Fragment } from "react";
import SubHeader from "../(components)/Subheader";
import EntrepreneurRegisterForm from "../(components)/EntrepreneurRegisterForm";

export const metadata = {
    title: "Entrepreneur Sign Up | The Hyfin",
    description:
      "businesses, Sign up on The Hyfin, the biggest and most reliable listing of services targeted to thrive entrepreneurs and business owners",
  };

const EntrepreneurRegistrationPage = () => {

  return (
    <Fragment>
        <SubHeader pagetitle="Entrepreneur Sign Up" />
        <EntrepreneurRegisterForm />
    </Fragment>
  )
}

export default EntrepreneurRegistrationPage