import React from "react";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import { loginRequest } from "../../authConfig";

import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import { LandingPage } from "../LandingPage";
import { WellnessVideos } from "../WellnessVideos";
import { Form1 } from "../Form1";
import { Form2 } from "../Form2";
//import { Form2 } from "./screens/Form2";

import { Form3 } from "../Form3";
import { Form4 } from "../Form4";
import { HomeMain } from "../HomeMain";
import axios from "axios";
import { PlayVideo } from "../PlayVideo";

export const Home = () => {
  const { instance } = useMsal();
  const navigate = useNavigate();

  const activeAccount = instance.getActiveAccount();
  const location = useLocation();
  var pathname = location.pathname;
  if (activeAccount && pathname == "/") {
    const userFilter = {
      email: activeAccount.username,
      provider: "AzureAD",
      sub: activeAccount.idTokenClaims.sub,
    };
    axios
      .post("http://localhost:9001/user/exist", userFilter)
      .then((res) => {
        if (res && res.data && res.data.success) {
          navigate("wellness-home");
        }
      })
      .catch((err) => console.log("Erroe in user exist " + err));
  }
  const handleLoginRedirect = () => {
    instance.loginRedirect(loginRequest).catch((error) => console.log(error));
  };
  return (
    <>
      <AuthenticatedTemplate>
        {activeAccount ? (
          // <Container>
          //   <IdTokenData idTokenClaims={activeAccount.idTokenClaims} />
          // </Container>
          <>
            {/* <MainContent /> */}
            <Routes>
              {/* <Route path="/" element={<Home instance={instance} />} /> */}
              <Route path="/" element={<Form1 />} />
              <Route path="/wellness-form1" element={<Form1 />} />
              <Route path="/wellness-form2" element={<Form2 />} />
              <Route path="/wellness-form3" element={<Form3 />} />
              <Route path="/wellness-form4" element={<Form4 />} />
              <Route path="/wellness-videos" element={<WellnessVideos />} />
              <Route path="/play-videos" element={<PlayVideo />} />
              <Route path="/wellness-home" element={<LandingPage />} />
            </Routes>
          </>
        ) : null}
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <HomeMain />
      </UnauthenticatedTemplate>
    </>
  );
};
