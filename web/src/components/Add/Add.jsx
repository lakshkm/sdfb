/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { LeadingIcon3 } from "../../icons/LeadingIcon3";
import { StyleRound } from "../../icons/StyleRound";
import "./style.css";

export const Add = ({ style }) => {
  return (
    <>
      {["filled", "outlined", "sharp", "two-tone"].includes(style) && (
        <LeadingIcon3 className="instance-node" color="#1A1A1A" />
      )}

      {style === "round" && <StyleRound className="instance-node" />}
    </>
  );
};

Add.propTypes = {
  style: PropTypes.oneOf(["round", "sharp", "filled", "two-tone", "outlined"]),
};
