import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import { Navbar, Button } from "react-bootstrap";
import { loginRequest } from "../authConfig";
import { AboutUs } from "./AboutUs";
import { ContactUs } from "./ContactUs";
import { NotificationBell } from "./NotificationBell";
import { PropertyDefaultWrapper } from "./PropertyDefaultWrapper";

export const NavigationBar = () => {
  const { instance } = useMsal();

  const handleLoginRedirect = () => {
    instance.loginRedirect(loginRequest).catch((error) => console.log(error));
  };

  const handleLogoutRedirect = () => {
    instance.logoutRedirect().catch((error) => console.log(error));
  };

  /**
   * Most applications will need to conditionally render certain components based on whether a user is signed in or not.
   * msal-react provides 2 easy ways to do this. AuthenticatedTemplate and UnauthenticatedTemplate components will
   * only render their children if a user is authenticated or unauthenticated, respectively.
   */
  return (
    <>
      {/* <Navbar bg="primary" variant="dark" className="navbarStyle"> */}
      <div className="overlap-4">
        <AboutUs className="about-us-instance" property1="default" />
        <AuthenticatedTemplate>
          <div className="overlap-5">
            {" "}
            <div
              className="property-default-wrapper property-1-0-variant-2 frame-5-instance"
              onClick={handleLogoutRedirect}
            >
              <div className="text-wrapper-2">Logout</div>
            </div>
            <NotificationBell className="notification-bell-icon-inbox-message-vector-20579436-2" />
          </div>
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <div className="overlap-5">
            <PropertyDefaultWrapper
              className="frame-5-instance"
              property1="default"
            />
          </div>
        </UnauthenticatedTemplate>
        <ContactUs
          className="contact-us-instance"
          property1="default"
          to="/contact-us"
        />
      </div>
      {/* </Navbar> */}
    </>
  );
};
