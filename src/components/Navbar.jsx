import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ isLoggedIn, setStatus }) => {
  const clearSession = () => {
    localStorage.clear();
    setStatus();
  };

  return (
    <div className="NavBarborder">
      {isLoggedIn ? (
        <Link to="/logout" className="NavBarLink" onClick={clearSession}>
          LOGOUT
        </Link>
      ) : (
        <Link to="/login" className="NavBarLink">
          LOGIN
        </Link>
      )}
      <Link to={isLoggedIn ? "/LoginHome" : "/"} className="NavBarLink">
        {/* <img src={logo} alt="Logo" className={HeaderCSS.title} /> */}
        <h1 className="NavBarTitle">MentorSpace</h1>
      </Link>
      <Link to="/about" className="NavBarLink">
        About
      </Link>
    </div>
  );
};

export default NavBar;
