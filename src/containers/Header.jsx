import React from "react";
import Login from "./Login";
import Menu from "./Menu";
import HeaderCSS from "./Header.module.css";

const Header = () => {
  return (
    <div className={HeaderCSS.border}>
      <Login />
      <p className={HeaderCSS.title}> SLC BAR CRAWL</p>
      <Menu />
    </div>
  );
};

export default Header;
