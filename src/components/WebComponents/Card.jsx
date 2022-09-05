import React from "react";
import "./Card.css";
import CrawlCard from "./CrawlCard";

const Card = ({ crawlState }) => {
  const crawl_name = crawlState.map((el, index) => {
    return <CrawlCard el={el} key={index} />;
  });

  return <section className="crawl_container">{crawl_name}</section>;
};

export default Card;
