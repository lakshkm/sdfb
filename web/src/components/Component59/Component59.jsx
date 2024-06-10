/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Component59 = ({
  property1,
  className,
  divClassName,
  divClassNameOverride,
  divClassName1,
  divClassName2,
  divClassName3,
  alzheimerSDiseaseClassName,
  divClassName4,
  divClassName5,
  divClassName6,
  divClassName7,
  divClassName8,
  divClassName9,
  divClassName10,
  divClassName11,
  ellipseClassName,
  ellipseClassNameOverride,
  ellipseClassName1,
  ellipseClassName2,
  ellipseClassName3,
  ellipseClassName4,
  ellipseClassName5,
  ellipseClassName6,
  ellipseClassName7,
  ellipseClassName8,
  ellipseClassName9,
  ellipseClassName10,
  ellipseClassName11,
  ellipseClassName12,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`component-59 property-1-5-${state.property1} ${className}`}
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
      <div className={`text-wrapper-21 ${divClassName}`}>Hypertension</div>
      <div className={`text-wrapper-22 ${divClassNameOverride}`}>Diabetes</div>
      <div className={`text-wrapper-23 ${divClassName1}`}>Arthritis</div>
      <div className={`text-wrapper-24 ${divClassName2}`}>Heart Disease</div>
      <div className={`text-wrapper-25 ${divClassName3}`}>Osteoporosis</div>
      <p className={`alzheimer-s-disease-2 ${alzheimerSDiseaseClassName}`}>
        Alzheimer&#39;s Disease and other forms of Dementia
      </p>
      <p className={`text-wrapper-26 ${divClassName4}`}>
        Chronic Obstructive Pulmonary Disease (COPD)
      </p>
      <div className={`text-wrapper-27 ${divClassName5}`}>Cancer</div>
      <p className={`text-wrapper-28 ${divClassName6}`}>
        Incontinence and urinary tract issues
      </p>
      <div className={`text-wrapper-29 ${divClassName7}`}>Sleep disorders</div>
      <p className={`text-wrapper-30 ${divClassName8}`}>
        Digestive disorders (such as acid reflux, constipation)
      </p>
      <p className={`text-wrapper-31 ${divClassName9}`}>
        Skin conditions (such as dermatitis, pressure ulcers)
      </p>
      <p className={`text-wrapper-32 ${divClassName10}`}>
        Respiratory infections (such as pneumonia, bronchitis)
      </p>
      <div className={`text-wrapper-33 ${divClassName11}`}>Other</div>
      <p className="do-you-have-any-of">
        Do you have any of the following medical&nbsp;&nbsp;conditions?
      </p>
      <div className={`ellipse-5 ${ellipseClassName}`}>
        {state.property1 === "variant-3" && <div className="ellipse-6" />}
      </div>
      <div className={`ellipse-7 ${ellipseClassNameOverride}`} />
      <div className={`ellipse-8 ${ellipseClassName1}`} />
      <div className={`ellipse-9 ${ellipseClassName2}`} />
      <div className={`ellipse-10 ${ellipseClassName3}`} />
      <div className={`ellipse-11 ${ellipseClassName4}`} />
      <div className={`ellipse-12 ${ellipseClassName5}`} />
      <div className={`ellipse-13 ${ellipseClassName6}`} />
      <div className={`ellipse-14 ${ellipseClassName7}`} />
      <div className={`ellipse-15 ${ellipseClassName8}`} />
      <div className={`ellipse-16 ${ellipseClassName9}`} />
      <div className={`ellipse-17 ${ellipseClassName10}`} />
      <div className={`ellipse-18 ${ellipseClassName11}`} />
      <div className={`ellipse-19 ${ellipseClassName12}`} />
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

Component59.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "variant-3", "default"]),
};
