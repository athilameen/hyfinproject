import { Fragment } from "react";
import SubHeader from "../../(components)/Subheader";
import DashboardNavigation from "@/app/(components)/DashboardNavigation";
import ChangePasswordForm from "@/app/(components)/ChangePasswordForm";
import ServiceList from "@/app/(components)/ServiceList";

export const metadata = {
  title: "My Account | The Hyfin",
  description:
    "Register on The Hyfin and get access to an unlimited number of service providers for your business all on one simple, user-friendly platform.",
};

const ServicePage = () => {

  return (
    <Fragment>
      <SubHeader pagetitle="My Account" />
      <section className="contact-pg-sec">
        <div className="myContainer">
          <div className="row">

            <div className="user-registration-account left">
              <div id="form" className="dashboardArea">
                <div className="frm_forms frm_style_formidable-style frm_login_form">
                  <div
                    id="user-registration"
                    className="user-registration horizontal"
                  >
                    <DashboardNavigation accountPage='services' />
                    <ServiceList />
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default ServicePage