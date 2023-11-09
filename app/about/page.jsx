import { Fragment } from "react";
import SubHeader from "../(components)/Subheader";

export const metadata = {
  title: 'About Us | The Hyfin',
  description: 'The Hyfin aims to be the go-to resource for aspiring entrepreneurs and existing businesses when looking for vendors and services.',
}

const AboutPage = () => {
  return (
    <Fragment>
      <SubHeader pagetitle="About Page" />
  </Fragment>
  )
}

export default AboutPage