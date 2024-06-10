import React from "react";
import { AboutUs } from "../../components/AboutUs";
import { Add } from "../../components/Add";
import { Component73 } from "../../components/Component73";
import { ContactUs } from "../../components/ContactUs";
import { FabExtended } from "../../components/FabExtended";
import { NotificationBell } from "../../components/NotificationBell";
import { PropertyDefaultWrapper } from "../../components/PropertyDefaultWrapper";
import "./style.css";
import { PageLayout } from "../../components/PageLayout";

export const LandingPage = () => {
  return (
    <PageLayout>
      <Component73
        className="component-73-instance"
        divClassName="component-17"
        property1="default"
        text="Join Wellness Session"
        to="/online-session"
      />
      <div className="overlap-50">
        <div className="text-wrapper-131">Our Services</div>
      </div>
      <p className="our-services-are">
        <span className="text-wrapper-132">
          Our services are tailored to support your well-being and provide
          access to a variety of resources:
          <br />
        </span>
        <span className="text-wrapper-133">Wellness Videos</span>
        <span className="text-wrapper-132">
          : Access a library of wellness videos covering topics such as
          exercise, yoga, and healthy eating.
          <br />
        </span>
        <span className="text-wrapper-133">Online Sessions</span>
        <span className="text-wrapper-132">
          : Join interactive online sessions for activities like meditation and
          fun exercises.
          <br />
        </span>
        <span className="text-wrapper-133">Daily Schedule</span>
        <span className="text-wrapper-132">
          : Utilize our daily scheduler to plan and set reminders for important
          tasks such as medication, exercises, and meal timings (breakfast,
          lunch, snack, and dinner).
          <br />
          Start prioritizing your health and wellness with our comprehensive
          suite of services!
        </span>
      </p>
      <div className="overlap-51">
        <div className="rectangle-50" />
        <div className="text-wrapper-134">Select a Service</div>
      </div>
      <Component73
        className="component-18"
        divClassName="component-19"
        property1="default"
        text="Access Videos"
        to="/wellness-videos"
      />
      <Component73
        className="component-20"
        divClassName="component-21"
        property1="default"
        text="Schedule your Day"
        to="/calendar-page-1"
      />
    </PageLayout>
  );
};
