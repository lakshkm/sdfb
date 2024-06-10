import React from "react";
import { useState } from "react";
import { Component63 } from "../../components/Component63";
import { Frame } from "../../components/Frame";
import { PropertyDefault } from "../../components/PropertyDefault";
import "./style.css";

export const Form3 = () => {
  const { medhistory, setMedHistory } = useState("yes");

  const onOptionMedHistoryChange = (e) => {
    setMedHistory(e.target.value);
  };
  return (
    <div className="screen-4">
      <div className="macbook-pro-3">
        <div className="overlap-14">
          <div className="rectangle-30" />
        </div>
        <div className="overlap-15">
          <div className="frame-21">
            <div className="overlap-16">
              <div className="frame-22">
                <div className="text-wrapper-66">type here...</div>
              </div>
              {/* <PropertyDefault
                className="property-1-default-instance"
                frameClassName="component-4"
                text="Are you currently taking any medications?"
                text1="Yes"
                text2="No"
                text3="Other"
              /> */}
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
            </div>
            <div className="frame-23">
              <div className="text-wrapper-66">type here...</div>
            </div>
            <div className="overlap-17">
              <div className="frame-22">
                <div className="text-wrapper-66">type here...</div>
              </div>
              <PropertyDefault
                className="property-1-default-instance"
                frameClassName="component-4"
                text="Do you have any mental health challenges?"
                text1="Yes"
                text2="No"
                text3="Other"
              />
            </div>
            <div className="overlap-18">
              <div className="frame-22">
                <div className="text-wrapper-66">type here...</div>
              </div>
              <PropertyDefault
                className="property-1-default-instance"
                frameClassName="component-4"
                text="Do you need assistance in day to day activities?"
                text1="Yes"
                text2="No"
                text3="Other"
              />
            </div>
          </div>
          <Component63
            className="component-63-instance"
            overlapGroupClassName="component-4"
            property1="default"
          />
        </div>
        <Frame
          className="frame-34256-instance"
          property1="default"
          text="Next"
          to="/wellness-form4"
        />
      </div>
    </div>
  );
};
