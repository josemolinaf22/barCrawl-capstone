import React, { useState } from "react";
import { GalleryData } from "../GalleryData";
import styles from "./LandingPage.module.css";

const LandingPage = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  //slideshow JS
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || length <= 0) {
    return null;
  }

  // end of slideshow

  return (
    //slideshow  containers
    <div className={styles.body}>
      {/* <div className={styles.slider}>
        <p className={styles.leftArrow} onClick={prevSlide}>
          <i className="fa-solid fa-square-caret-left"></i>
        </p>
        {GalleryData.map((gallery, index) => {
          return (
            <div
              className={
                index === current ? "styles.slideActive" : "style.slide"
              }
              key={index}
            >
              {index === current && (
                <img
                  src={gallery.image}
                  alt="images"
                  className={styles.image}
                />
              )}
            </div>
          );
        })}
        <p className={styles.rightArrow} onClick={nextSlide}>
          <i className="fa-solid fa-square-caret-right"></i>
        </p>
      </div> */}
      {/* end of slideshow container */}
      <p className={styles.description}>
        New to Salt Lake, or maybe you don't know what to do while being
        downtown. Don't worry we gotcha covered! Here's a website where you can
        see what crawls Utahns are up to now.
      </p>
    </div>
  );
};

export default LandingPage;
