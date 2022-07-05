import React, { useState } from "react";
import { GalleryData } from "./GalleryData";
import styles from "./LandingPage.module.css";

const LandingPage = ({ slides, isLoggedIn }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || length <= 0) {
    return null;
  }

  return (
    <div className={styles.body}>
      <div className={styles.slider}>
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
      </div>
      <p className={styles.description}>
        New to Salt Lake, or maybe don't know what to do downtown. Here's a bar
        crawl which is to help you bar hop with new people.
      </p>
    </div>
  );
};

export default LandingPage;
