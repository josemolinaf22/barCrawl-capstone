import React from "react";
import MentorImg from "../Assets/MentorPhoto2.png";
import BorderSeparator from "../Assets/BorderSeparator.png";

const LandingPage = () => {
  return (
    <section className="landingPageContainer">
      <div className={"landingPageBody"}>
        <img
          className="landingPageImage"
          src="https://media.giphy.com/media/PqjTdvXImZQfcmTYEO/giphy.gif"
          alt="Cartoon Rocket"
        />
        <p className={"landingPageDescription"}>
          Welcome to MentorSpace, a place where you can find a mentor or become
          one.
        </p>
      </div>
      <div className="landingPageBody">
        <p className={"landingPageDescription"}>
          Mentorship is a powerful relationship that can have a profound impact
          on the lives of both the mentor and the mentee.
        </p>
        <img
          className="landingPageImage"
          src={MentorImg}
          alt="Mentor in space"
        />
      </div>

      <img
        src={BorderSeparator}
        alt="space with blackhole"
        className="BorderSeparator"
      />

      <div className="landingPageBody">
        <p className={"landingPageDescription"}>
          As a mentor, you have the opportunity to share your knowledge,
          experience, and wisdom with someone who is just starting out or
          looking to make a change in their career.{" "}
        </p>
      </div>

      <div className="landingPageBody">
        <p className={"landingPageDescription"}>
          Are you ready to start your journey?
        </p>
      </div>
    </section>
  );
};

export default LandingPage;
