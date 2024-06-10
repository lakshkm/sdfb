/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Check } from "../../icons/Check";
import "./style.css";

export const Component63 = ({ property1, className, overlapGroupClassName }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`component-63 property-1-4-${state.property1} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      {state.property1 === "default" && (
        <div className={`overlap-group-2 ${overlapGroupClassName}`}>
          <div className="overlap">
            <img className="img" alt="Ellipse" src="/img/ellipse-52.svg" />
            <div className="heart-disease">Tai Chi</div>
          </div>
          <div className="sleep-disorders">None</div>
          <div className="cancer">Cycling</div>
          <div className="alzheimer-s-disease">Other</div>
          <div className="osteoporosis">Swimming</div>
          <div className="text-wrapper-6">Arthritis</div>
          <div className="diabetes">Yoga</div>
          <div className="hypertension">Walking</div>
          <p className="p">Are you engaged in any physical activity or exercise?</p>
          <div className="rectangle" />
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <div className="rectangle-4" />
          <div className="rectangle-5" />
          <div className="rectangle-6" />
          <div className="rectangle-7" />
          <div className="rectangle-8" />
        </div>
      )}

      {["variant-2", "variant-3"].includes(state.property1) && (
        <>
          <div className="overlap-group-3">
            <img className="ellipse-4" alt="Ellipse" src="/img/ellipse-52-1.svg" />
            <div className="text-wrapper-7">Tai Chi</div>
          </div>
          <div className="text-wrapper-8">None</div>
          <div className="text-wrapper-9">Cycling</div>
          <div className="text-wrapper-10">Other</div>
          <div className="text-wrapper-11">Swimming</div>
          <div className="text-wrapper-12">Arthritis</div>
          <div className="text-wrapper-13">Yoga</div>
          <div className="text-wrapper-14">Walking</div>
          <p className="text-wrapper-15">Are you engaged in any physical activity or exercise?</p>
          <div className="rectangle-9" />
          <div className="rectangle-10" />
          <div className="rectangle-11" />
          <div className="rectangle-12" />
          <div className="rectangle-13">{state.property1 === "variant-3" && <Check className="check-instance" />}</div>
          <div className="rectangle-14" />
          <div className="rectangle-15" />
          <div className="rectangle-16" />
        </>
      )}
    </div>
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

Component63.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "variant-3", "default"]),
};
