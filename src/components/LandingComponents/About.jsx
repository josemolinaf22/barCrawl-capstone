import React from "react";
import "./About.css";
import logo from "../Assets/HistoryRepeatsArtwork.png";

const About = () => {
  return (
    <section className="react-bg">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <div className="about_card">
        <div className="description_container">
          <p>
            {" "}
            Building this app helped me solidify my knowledge of React. It
            Improved my web development skills by making API calls using a
            database.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
