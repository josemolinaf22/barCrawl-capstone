import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  const curDate = new Date().getFullYear();

  return (
    <footer className={styles.border}>
      <p>©Jose D Molina {curDate}</p>
    </footer>
  );
};

export default Footer;
