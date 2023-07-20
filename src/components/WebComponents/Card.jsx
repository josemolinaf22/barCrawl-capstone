import React from "react";
import "./Card.css";
import CrawlCard from "./CrawlCard";

const Card = ({ crawlState }) => {
  let crawlStateArr = new Array(crawlState);
  const crawlName = crawlStateArr.map((el, index) => {
    return <CrawlCard el={el} key={index} />;
  });

  return <section className="crawl_container">{crawlName}</section>;
};

export default Card;
