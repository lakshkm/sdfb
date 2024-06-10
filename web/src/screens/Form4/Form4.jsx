import React from "react";
import { Frame } from "../../components/Frame";
import { PropertyDefault } from "../../components/PropertyDefault";
import "./style.css";

export const Form4 = () => {
  return (
    <div className="macbook-pro">
      <div className="div-2">
        <div className="rectangle-wrapper">
          <div className="rectangle-21" />
        </div>
        <div className="frame-7">
          <div className="overlap-2">
            <div className="frame-9">
              <div className="text-wrapper-35">type here...</div>
            </div>
            <PropertyDefault
              className="property-1-default"
              frameClassName="property-default-instance"
              text="Any specific support or accommodation needed?"
              text1="Yes"
              text2="No"
              text3="Other"
            />
          </div>
          <div className="overlap-3">
            <div className="frame-11">
              <div className="text-wrapper-35">type here...</div>
            </div>
            <PropertyDefault
              className="property-1-default"
              frameClassName="property-default-instance"
              text="How would you like to contact us?"
              text1="Phone"
              text2="Email"
              text3="Text"
            />
          </div>
          <div className="frame-12">
            <p className="senior-wellness">
              Senior Wellness Medical Information Disclaimer:
              <br />
               <br />
               <br />
              The medical information provided by seniors is intended for the
              purpose of promoting their wellness and ensuring appropriate
              support and care. While we make every effort to maintain the
              confidentiality and accuracy of this information, it is important
              to understand that it is not a substitute for professional medical
              advice, diagnosis, or treatment. Seniors are encouraged to consult
              with their healthcare providers regarding any medical concerns or
              conditions. The organization assumes no responsibility or
              liability for the accuracy, completeness, or timeliness of the
              medical information provided. Participation in wellness programs
              or activities based on this information is voluntary and at the
              individual&#39;s own discretion and risk. By providing their
              medical information, seniors acknowledge that they understand and
              accept these terms.
            </p>
            <Frame
              className="frame-34256"
              divClassName="frame-instance"
              property1="default"
              text="Accept"
              to="/wellness-home"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
