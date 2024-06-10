import React from "react";
import { AboutUs } from "../../components/AboutUs";
import { Add } from "../../components/Add";
import { ContactUs } from "../../components/ContactUs";
import { FabExtended } from "../../components/FabExtended";
import { NotificationBell } from "../../components/NotificationBell";
import { PropertyDefaultWrapper } from "../../components/PropertyDefaultWrapper";
import { IconsArrowLeft24Px } from "../../icons/IconsArrowLeft24Px";
import { IconsArrowRight24Px } from "../../icons/IconsArrowRight24Px";
import "./style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player/youtube";

export const PlayVideo = () => {
  const navigate = useNavigate();

  var ytlink = localStorage.getItem("video_link");

  return (
    <div className="wellness-videos">
      <ReactPlayer url={ytlink} />
    </div>
  );
};
