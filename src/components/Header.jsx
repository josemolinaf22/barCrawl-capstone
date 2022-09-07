import React from "react";
import HeaderCSS from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "../SlcCrawl.png";

const Header = ({ isLoggedIn, setStatus }) => {
  const clearSession = () => {
    localStorage.clear();
    setStatus();
  };

  return (
    <div className={HeaderCSS.border}>
      {isLoggedIn ? (
        <Link to="/logout" className={HeaderCSS.link} onClick={clearSession}>
          LOGOUT
        </Link>
      ) : (
        <Link to="/login" className={HeaderCSS.link}>
          LOGIN
        </Link>
      )}
      <Link to={isLoggedIn ? "/LoginHome" : "/"} className={HeaderCSS.link}>
        {/* <img src={logo} alt="Logo" className={HeaderCSS.title} /> */}
        <h1>SLC Night Crawl </h1>
      </Link>
      <Link to="/about" className={HeaderCSS.link}>
        About
      </Link>
    </div>
  );
};

export default Header;
