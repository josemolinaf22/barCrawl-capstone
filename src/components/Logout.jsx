import React from "react";
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <section className="app">
      <section className="logout_body">
        <p>You've been logged out.</p>
        <br />
        <Link to="/login" className="link">
          RETURN TO LOGIN
        </Link>
      </section>
    </section>
  );
};

export default Logout;
