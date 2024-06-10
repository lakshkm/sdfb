/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Component73 = ({
  property1,
  className,
  divClassName,
  text = "Join Online Session",
  to,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <Link
      className={`component-73 property-1-22-${state.property1} ${className}`}
      to={to}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className={`join-online-session ${divClassName}`}>{text}</div>
    </Link>
  );
};

function reducer(state, action) {
  if (state.property1 === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "variant-2",
        };
    }
  }

  if (state.property1 === "variant-2") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "default",
        };

      case "click":
        return {
          property1: "variant-3",
        };
    }
  }

  return state;
}

Component73.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "variant-3", "default"]),
  text: PropTypes.string,
  to: PropTypes.string,
};
