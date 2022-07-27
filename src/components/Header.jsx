import React from "react";
import HeaderCSS from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = ({ isLoggedIn, setStatus }) => {
  const clearSession = () => {
    localStorage.clear();
    setStatus();
  };
  // console.log("this is from header component", isLoggedIn);
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
        <p className={HeaderCSS.title}> SLC NIGHT CRAWL</p>
      </Link>
      <Link to="/about" className={HeaderCSS.link}>
        About
      </Link>
    </div>
  );
};

export default Header;
