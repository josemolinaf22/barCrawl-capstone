import React from "react";
const Footer = () => {
  const curDate = new Date().getFullYear();

  return (
    <footer className="FooterBorder">
      <p>©Jose D Molina {curDate}</p>
    </footer>
  );
};

export default Footer;
