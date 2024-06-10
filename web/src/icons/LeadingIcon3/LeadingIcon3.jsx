/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const LeadingIcon3 = ({ color = "white", className }) => {
  return (
    <svg
      className={`leading-icon-3 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill={color} />
    </svg>
  );
};

LeadingIcon3.propTypes = {
  color: PropTypes.string,
};
