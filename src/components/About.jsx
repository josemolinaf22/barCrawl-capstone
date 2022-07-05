import React from "react";
import "./About.css";
import logo from "../logo.svg";

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
            This app was created to help me solidify my understand of React. It
            helped me improve my web development skills by making api calls
            while using a database server.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
