import React from "react";
import { useState } from "react";
import { Component59 } from "../../components/Component59";
import { Frame } from "../../components/Frame";
import { PropertyDefault } from "../../components/PropertyDefault";
import "./style.css";

export const Form2 = () => {
  const { medhistory, setMedHistory } = useState("yes");

  const onOptionMedHistoryChange = (e) => {
    setMedHistory(e.target.value);
  };

  return (
    <div className="screen-18">
      <div className="macbook-pro-4">
        <div className="overlap-66">
          <div className="rectangle-55" />
        </div>
        <div className="overlap-67">
          <div className="frame-76">
            <div className="frame-77">
              <div className="text-wrapper-167">Medical History</div>
            </div>
            <div className="frame-78">
              <div className="frame-79">
                <div className="text-wrapper-168">type here...</div>
              </div>
            </div>
            <div className="overlap-68">
              <PropertyDefault
                className="component-31"
                frameClassName="component-32"
                text="Do you have any hearing impairment?"
                text1="Yes"
                text2="No"
                text3="Maybe"
              />
              <div className="component-33">
                <div className="frame-80">
                  <div className="text-wrapper-169">
                    <input
                      type="radio"
                      name="medhistory"
                      value="yes"
                      id="yesmh"
                      checked={medhistory === "yes"}
                      onChange={onOptionMedHistoryChange}
                    />
                    <label htmlFor="male">Yes</label>
                  </div>
                  <div className="text-wrapper-170">
                    <input
                      type="radio"
                      name="medhistory"
                      value="no"
                      id="nomh"
                      checked={medhistory === "no"}
                      onChange={onOptionMedHistoryChange}
                    />
                    <label htmlFor="male">No</label>
                  </div>
                </div>
                <div className="frame-81">
                  <p className="text-wrapper-171">
                    Do you use any artificial or prosthetic limbs?
                  </p>
                </div>
              </div>
              <PropertyDefault
                className="component-34"
                frameClassName="component-32"
                text="Do you&nbsp;&nbsp;need assistance in walking?"
                text1="Yes"
                text2="No"
                text3="Other"
              />
              <div className="frame-82">
                <div className="text-wrapper-168">type here...</div>
              </div>
            </div>
            <PropertyDefault
              className="component-35"
              frameClassName="component-32"
              text="Do you experience any issues with your vision?"
              text1="Yes"
              text2="No"
              text3="Maybe"
            />
            <div className="overlap-69">
              <div className="frame-83">
                <div className="text-wrapper-168">type here...</div>
              </div>
              <PropertyDefault
                className="component-36"
                frameClassName="component-32"
                text="Have you undergone any Medical surgeries ?"
                text1="Yes"
                text2="No"
                text3="Other"
              />
            </div>
          </div>
          <Component59
            alzheimerSDiseaseClassName="component-37"
            className="component-59-instance"
            divClassName="component-37"
            divClassName1="component-37"
            divClassName10="component-37"
            divClassName11="component-37"
            divClassName2="component-37"
            divClassName3="component-37"
            divClassName4="component-37"
            divClassName5="component-37"
            divClassName6="component-37"
            divClassName7="component-37"
            divClassName8="component-37"
            divClassName9="component-37"
            divClassNameOverride="component-37"
            ellipseClassName="component-38"
            ellipseClassName1="component-38"
            ellipseClassName10="component-38"
            ellipseClassName11="component-38"
            ellipseClassName12="component-38"
            ellipseClassName2="component-38"
            ellipseClassName3="component-38"
            ellipseClassName4="component-38"
            ellipseClassName5="component-38"
            ellipseClassName6="component-38"
            ellipseClassName7="component-38"
            ellipseClassName8="component-38"
            ellipseClassName9="component-38"
            ellipseClassNameOverride="component-38"
            property1="default"
          />
        </div>
        <Frame
          className="frame-84"
          property1="default"
          text="Next"
          to="/wellness-form3"
        />
      </div>
    </div>
  );
};
