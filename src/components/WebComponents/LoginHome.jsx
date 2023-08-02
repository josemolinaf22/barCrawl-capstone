import React from "react";
import { useNavigate } from "react-router-dom";

const LoginHome = () => {
  const navigate = useNavigate();
  const handleBcClick = () => {
    navigate("/browsecrawl");
  };

  return (
    <section className="LoginHomebody">
      <div className="LoginHomeContainer" onClick={() => handleBcClick()}>
        <p>Browse Crawls</p>
      </div>
    </section>
  );
};

export default LoginHome;
