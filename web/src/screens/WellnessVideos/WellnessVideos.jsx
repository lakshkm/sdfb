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

export const WellnessVideos = () => {
  const navigate = useNavigate();
  const [videosLeft, setVideosLeft] = useState([]);
  const [videosRight, setVideosRight] = useState([]);
  const [vidpresent, setVidPresent] = useState([]);
  const [vidpast, setVidPast] = useState([]);
  const [vidpopular, setVidPopular] = useState([]);

  const fetch = () => {
    axios.get("http://localhost:9001/video").then((response) => {
      if (response.data) {
        var i = 1;
        var videoLArray = [];
        var videoRArray = [];
        var vidPresentArray = [];
        var vidPastArray = [];
        var vidPopularArray = [];
        const resArray = Array.from(response.data.data);
        // for (i = 1; i <= response.data.length; i++) {
        //   if (i % 2 == 0) videoLArray.push(response.data[i]);
        //   else videoRArray.push(response.data[i]);
        //   i++;
        // }
        resArray.forEach((element) => {
          if (i % 2 == 0) videoLArray.push(element);
          else videoRArray.push(element);
          if (element.category == "Recent") vidPresentArray.push(element);
          else if (element.category == "Past") {
            vidPastArray.push(element);
          } else vidPopularArray.push(element);
          i++;
        });
        setVideosLeft(videoLArray);
        setVideosRight(videoRArray);
        setVidPresent(vidPresentArray);
        setVidPast(vidPastArray);
        setVidPopular(vidPopularArray);
      }
    });
  };

  const launchYT = (video) => {
    var link = video.link;
    window.open(link);
  };

  const launchYTPlayer = (video) => {
    var link = video.link;
    localStorage.setItem("video_link", link);
    navigate("/play-videos");
  };

  // component did mount
  useEffect(() => {
    fetch();
  }, []);
  return (
    <div className="wellness-videos">
      <div className="div-8">
        <div className="overlap-52">
          <AboutUs className="about-us-6" property1="default" />
          <PropertyDefaultWrapper className="frame-59" property1="default" />
          <ContactUs
            className="contact-us-6"
            property1="default"
            to="/contact-us"
          />
          <NotificationBell className="notification-bell-3" to="/frame-34300" />
        </div>
        <div className="frame-60">
          <div className="overlap-group-15">
            <div className="overlap-53">
              <img
                className="phone-6"
                alt="Phone"
                src="https://cdn.animaapp.com/projects/66360000b7f6a62466cc2614/releases/66366da0a813bc856b97145b/img/phone@2x.png"
              />
              <div className="overlap-54">
                <div className="text-wrapper-135">Contact Us</div>
                <div className="element-8">+1 (437) 988-4422</div>
              </div>
            </div>
            <img
              className="mail-6"
              alt="Mail"
              src="https://cdn.animaapp.com/projects/66360000b7f6a62466cc2614/releases/66366da0a813bc856b97145b/img/mail.svg"
            />
            <div className="text-wrapper-136">Follow Us</div>
            <div className="text-wrapper-137">Don’t Miss Out!</div>
            <p className="text-wrapper-138">Signup for the latest news</p>
            <div className="text-wrapper-139">Email Address</div>
            <div className="text-wrapper-140">Date of Birth</div>
            <div className="rectangle-51" />
            <div className="rectangle-52" />
            <img
              className="social-icons-11"
              alt="Social icons"
              src="https://cdn.animaapp.com/projects/66360000b7f6a62466cc2614/releases/66366da0a813bc856b97145b/img/social-icons---instagram-5.svg"
            />
            <img
              className="social-icons-12"
              alt="Social icons"
              src="https://cdn.animaapp.com/projects/66360000b7f6a62466cc2614/releases/66366da0a813bc856b97145b/img/social-icons---linkedin-2.svg"
            />
            <div className="support-6">support@saidhamcanada.com</div>
            <div className="overlap-55">
              <div className="component-22">
                <FabExtended
                  className="FAB-extended-7"
                  icon={<Add style="outlined" />}
                  leadingIcon
                  outlined={false}
                  text=""
                />
              </div>
              <div className="text-wrapper-141">Sign Up</div>
            </div>
          </div>
        </div>
        <div className="overlap-56">
          <div className="text-wrapper-142">Wellness Videos</div>
        </div>
        <IconsArrowRight24Px className="icons-arrow-right-24px-2" />
        <IconsArrowLeft24Px className="icons-arrow-left-24px-1" />
        {/* render video link here */}
        {vidpresent.length > 0 ? (
          <>
            <div className="title-wrapper-143">Recent Videos</div>
            <div className="overlap-left">
              <div className="frame-left-1">
                <div className="frame-left-2">
                  <div className="overlap-group-left">
                    <div className="text-wrapper-143">
                      <button onClick={() => launchYTPlayer(vidpresent[0])}>
                        Watch
                      </button>
                    </div>
                    <div className="text-wrapper-144">{vidpresent[0].name}</div>
                  </div>
                </div>
              </div>
              <img
                className="unsplash-ckwunacxzc"
                alt="Unsplash"
                src="https://cdn.animaapp.com/projects/66360000b7f6a62466cc2614/releases/66366da0a813bc856b97145b/img/unsplash-3ckwunacxzc.png"
              />
            </div>
          </>
        ) : null}
        {vidpresent.length > 1 ? (
          <>
            {" "}
            <div className="frame-65">
              <div className="frame-63">
                <div className="overlap-group-17">
                  <div className="text-wrapper-143">
                    <button onClick={() => launchYT(vidpresent[1])}>
                      Watch
                    </button>
                  </div>
                  <div className="text-wrapper-144">{vidpresent[1].name}</div>
                </div>
              </div>
              <img
                className="unsplash-gvfrka-eq"
                alt="Unsplash"
                src="https://cdn.animaapp.com/projects/66360000b7f6a62466cc2614/releases/66366da0a813bc856b97145b/img/unsplash-gvf7rka-e9q.png"
              />
            </div>
          </>
        ) : null}
        {vidpast.length > 0 ? (
          <>
            <div className="title-wrapper-144">Past Videos</div>
            <div className="overlap-58">
              <div className="frame-62">
                <div className="frame-63">
                  <div className="overlap-group-17">
                    <div className="text-wrapper-143">
                      <button onClick={() => launchYTPlayer(vidpast[0])}>
                        Watch
                      </button>
                    </div>
                    <div className="text-wrapper-144">{vidpast[0].name}</div>
                  </div>
                </div>
              </div>
              <img
                className="unsplash-ckwunacxzc"
                alt="Unsplash"
                src="https://cdn.animaapp.com/projects/66360000b7f6a62466cc2614/releases/66366da0a813bc856b97145b/img/unsplash-3ckwunacxzc.png"
              />
            </div>
          </>
        ) : null}
        {vidpast.length > 1 ? (
          <>
            <div className="frame-66">
              <div className="frame-63">
                <div className="overlap-group-17">
                  <div className="text-wrapper-143">
                    <button onClick={() => launchYT(vidpast[1])}>Watch</button>
                  </div>
                  <div className="text-wrapper-144">{vidpast[1].name}</div>
                </div>
              </div>
            </div>
          </>
        ) : null}
        {vidpopular.length > 0 ? (
          <>
            <div className="title-wrapper-145">Popular Videos</div>
            <div className="overlap-59">
              <div className="frame-64">
                <div className="frame-63">
                  <div className="overlap-group-16">
                    <div className="text-wrapper-143">
                      <button onClick={() => launchYTPlayer(vidpopular[0])}>
                        Watch
                      </button>
                    </div>
                    <div className="text-wrapper-144">{vidpopular[0].name}</div>
                  </div>
                </div>
              </div>
              <img
                className="unsplash-gvfrka-eq"
                alt="Unsplash"
                src="https://cdn.animaapp.com/projects/66360000b7f6a62466cc2614/releases/66366da0a813bc856b97145b/img/unsplash-gvf7rka-e9q.png"
              />
            </div>
          </>
        ) : null}
        {vidpopular.length > 1 ? (
          <>
            <div className="frame-67">
              <div className="frame-63">
                <div className="overlap-group-17">
                  <div className="text-wrapper-143">
                    <button onClick={() => launchYT(vidpopular[1])}>
                      Watch
                    </button>
                  </div>
                  <div className="text-wrapper-144">{vidpopular[1].name}</div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};
