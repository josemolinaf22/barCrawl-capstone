import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BrowseCrawl.css";
import Card from "./Card";

const BrowseCrawl = () => {
  const [crawlState, setCrawlState] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:4006/api/crawl")
      .then((res) => {
        setIsLoading(false);
        setCrawlState(res.data);
      })
      .catch((err) => console.log("Error on crawls", err));
  }, []);

  return (
    <section className="section">
      <p>
        <br />
        Location 1 starts at 9:00 PM <br /> Location 2 starts at 10:30 PM <br />{" "}
        Location 3 starts at 11:30 PM
      </p>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <Card crawlState={crawlState} />
      )}
    </section>
  );
};

export default BrowseCrawl;
