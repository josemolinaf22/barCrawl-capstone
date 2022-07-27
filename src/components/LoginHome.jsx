import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginHome.module.css";

const LoginHome = () => {
  const navigate = useNavigate();
  const handleBcClick = () => {
    navigate("/browsecrawl");
    // <Link className="Link" to="/browsecrawl"></Link>;
  };

  return (
    <section className={styles.body}>
      {/* <div className={styles.container}>
        <p>Create Crawl</p>
      </div> */}
      <div className={styles.container} onClick={() => handleBcClick()}>
        <p>Browse Crawls</p>
      </div>
    </section>
  );
};

export default LoginHome;
