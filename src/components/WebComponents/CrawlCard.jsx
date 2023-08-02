import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const CrawlCard = (props) => {
  const [bars, setBars] = useState([]);
  const { index, el } = props;

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/bars/${el.crawl_id}`)
      .then((res) => setBars(res.data))

      .catch((err) => console.log("Error with bars .get", err));
  }, []);

  const barsArr = new Array(bars);
  const barList = barsArr.map((el, index) => {
    return `<p key='${index}'>NAME: ${el.bar_name}
    LOCATION: ${el.bar_street}</p>`;
  });

  const handleApiClick = () => {
    Swal.fire({
      imageUrl: `${el.location}`,
      imageHeight: 500,
      imageWidth: 500,
      imageAlt: "A tall image",
      html: `${barList}`,
    });
  };
  return (
    <div
      className="CardCrawl_card"
      key={index}
      onClick={() => handleApiClick()}
    >
      <div className="Cardcrawl_color"> </div>
      <div className="Cardcrawl_name_container">
        <p>{el.crawl_name}</p>
      </div>
    </div>
  );
};

export default CrawlCard;
