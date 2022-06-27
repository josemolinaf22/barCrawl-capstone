import React from "react";
import HeaderCSS from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={HeaderCSS.border}>
      <Link to="/login" className={HeaderCSS.link}>
        Login
      </Link>
      <Link to="/" className={HeaderCSS.link}>
        <p className={HeaderCSS.title}> SLC BAR CRAWL</p>
      </Link>
      <Link to="/menu" className={HeaderCSS.link}>
        Menu
      </Link>
    </div>
  );
};

export default Header;
