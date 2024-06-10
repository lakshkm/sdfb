/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { LeadingIcon3 } from "../../icons/LeadingIcon3";
import "./style.css";

export const FabExtended = ({
  outlined,
  leadingIcon,
  className,
  icon = <LeadingIcon3 className="leading-icon" color="white" />,
  text = "Button",
}) => {
  return (
    <div
      className={`FAB-extended outlined-${outlined} leading-icon-${leadingIcon} ${className}`}
    >
      {leadingIcon && <>{icon}</>}

      <div className="button">{text}</div>
    </div>
  );
};

FabExtended.propTypes = {
  outlined: PropTypes.bool,
  leadingIcon: PropTypes.bool,
  text: PropTypes.string,
};
