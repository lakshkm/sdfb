import React from "react";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import { loginRequest } from "../../authConfig";
import { Add } from "../../components/Add";
import { Arrow } from "../../components/Arrow";
import { FabExtended } from "../../components/FabExtended";
import { IconsArrowForward24Px3 } from "../../icons/IconsArrowForward24Px3";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { PageLayout } from "../../components/PageLayout";

export const HomeMain = () => {
  const { instance } = useMsal();
  const navigate = useNavigate();

  const activeAccount = instance.getActiveAccount();
  if (activeAccount) {
    //navigate("/wellness-form1");
  }
  const handleLoginRedirect = () => {
    instance.loginRedirect(loginRequest).catch((error) => console.log(error));
  };
  return (
    <PageLayout>
      <div className="frame-10">
        <p className="text-wrapper-17">
          We are dedicated to enhancing the well-being and quality of life for
          seniors in our community. Our comprehensive wellness programs and
          services are designed to promote physical health, mental resilience,
          and social engagement among older adults.
        </p>
      </div>

      <div className="group-wrapper">
        <div className="group-2">
          <div className="div-3">
            <img
              className="unsplash"
              alt="Unsplash"
              src="/src/img/unsplash-cc10ijdoj78.png"
            />
            <Arrow
              className="arrow-instance"
              iconsArrowForward24Px22StyleOverrideClassName="design-component-instance-node"
            />
            <Arrow
              className="arrow-2"
              icon={<IconsArrowForward24Px3 className="icons-arrow-forward" />}
            />
          </div>
          <div className="frame-11">
            <img
              className="unsplash-tewwyarfcm"
              alt="Unsplash"
              src="/img/unsplash-ppzass086os.png"
            />
            <Arrow className="arrow-3" />
            <Arrow className="arrow-4" />
          </div>
          <div className="overlap-group-4">
            <div className="div-3" />
            <Arrow className="arrow-5" />
            <Arrow className="arrow-6" />
          </div>
          <img
            className="unsplash-ppzassos"
            alt="Unsplash"
            src="/img/unsplash-ppzass086os.png"
          />
        </div>
      </div>
      <div className="frame-12">
        <p className="we-offer-a-different">
          <span className="span">We offer a different </span>
          <span className="text-wrapper-18">TYPES of SERVICES</span>
          <span className="span">
            {" "}
            like:
            <br />
          </span>
          <span className="text-wrapper-19">Schedule Assistant:</span>
          <span className="span">
            {" "}
            Keep your days organized with our scheduling calendar feature,
            designed to help you manage your time effectively and stay on top of
            important appointments and activities.
            <br />
          </span>
          <span className="text-wrapper-19">Wellness Sessions: </span>
          <span className="span">
            Gain access to a variety of wellness sessions including yoga,
            meditation, and healthy eating workshops. These sessions are
            designed to promote physical and mental well-being.
            <br />
          </span>
          <span className="text-wrapper-19">Online Fun Activities: </span>
          <span className="span">
            Join our online sessions for interactive and enjoyable activities
            such as exercise routines, games, and more. Stay engaged and have
            fun from the comfort of your home.
            <br />
            Explore our services and start improving your overall wellness
            today. Let us help you live your best life!
            <br />
          </span>
        </p>
        <div className="frame-13">
          <div className="text-wrapper-20" onClick={handleLoginRedirect}>
            Access our Services
          </div>
        </div>
      </div>
      <div className="overlap-wrapper">
        <div className="overlap-6">
          <div className="overlap-7">
            <img className="phone" alt="Phone" src="/img/phone.png" />
            <div className="overlap-group-5">
              <div className="text-wrapper-21">Contact Us</div>
              <div className="element">+1 (437) 988-4422</div>
            </div>
          </div>
          <img className="mail" alt="Mail" src="/img/mail.svg" />
          <div className="text-wrapper-22">Follow Us</div>
          <div className="text-wrapper-23">Don’t Miss Out!</div>
          <p className="text-wrapper-24">Signup for the latest news</p>
          <div className="text-wrapper-25">Email Address</div>
          <div className="text-wrapper-26">Date of Birth</div>
          <div className="rectangle-18" />
          <div className="rectangle-19" />
          <img
            className="social-icons"
            alt="Social icons"
            src="/img/social-icons-instagram.svg"
          />
          <img
            className="social-icons-2"
            alt="Social icons"
            src="/img/social-icons-linkedin.svg"
          />
          <div className="support">support@saidhamcanada.com</div>
          <div className="overlap-8">
            <div className="component-2">
              <FabExtended
                className="FAB-extended-instance"
                icon={<Add style="outlined" />}
                leadingIcon
                outlined={false}
                text=""
              />
            </div>
            <div className="text-wrapper-27">Sign Up</div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
