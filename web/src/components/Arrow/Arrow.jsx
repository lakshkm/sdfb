/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconsArrowForward24Px22 } from "../../icons/IconsArrowForward24Px22";
import "./style.css";

export const Arrow = ({
  className,
  iconsArrowForward24Px22StyleOverrideClassName,
  icon = (
    <IconsArrowForward24Px22
      className={iconsArrowForward24Px22StyleOverrideClassName}
    />
  ),
  onClick,
}) => {
  return (
    <div className={`arrow ${className}`} onClick={onClick}>
      {icon}
    </div>
  );
};
