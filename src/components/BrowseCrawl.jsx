import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BrowseCrawl.css";
import Card from "./Card";
// import CrawlCard from "./CrawlCard";
import { HollowDotsSpinner } from "react-epic-spinners";

const BrowseCrawl = () => {
  const [crawlState, setCrawlState] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4006/api/crawl")
      .then((res) => setCrawlState(res.data))
      .catch((err) => console.log("Error on crawls", err));
  }, []);
  // console.log(" crawlState console", crawlState.crawl_id);
  // const crawlList = crawlState.map((el, index) => {
  //   return (
  //     <div className="crawl_list_container" key={index}>
  //       <img src={el.location} alt={el.crawl_name} />
  //     </div>
  //   );
  // });

  // const crawl_name = crawlState.map((el, index) => {
  //   return <CrawlCard el={el} index={index} />;
  // });
  // console.log("crawlState", crawlState[0].crawl_id);

  return (
    <section className="section">
      <p>
        {" "}
        <br />
        Location 1 starts at 9:00 PM <br /> Location 2 starts at 10:30 PM <br />{" "}
        Location 3 starts at 11:30 PM
      </p>
      <Card crawlState={crawlState} />
    </section>
  );
};

export default BrowseCrawl;
