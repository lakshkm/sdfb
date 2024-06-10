/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PropertyDefault = ({
  className,
  frameClassName,
  text = "Gender",
  text1 = "Male",
  text2 = "Female",
  text3 = "Prefer Not to Say",
}) => {
  return (
    <div className={`property-default ${className}`}>
      <div className="overlap-group">
        <div className={`gender-wrapper ${frameClassName}`}>
          <div className="gender">{text}</div>
        </div>
        <div className="div">
          <div className="male">{text1}</div>
          <div className="female">{text2}</div>
          <div className="prefer-not-to-say">{text3}</div>
          <div className="ellipse" />
          <div className="ellipse-2" />
          <div className="ellipse-3" />
        </div>
      </div>
    </div>
  );
};

PropertyDefault.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
};
