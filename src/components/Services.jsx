import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "..//assets/7.jpg";
import img2 from "..//assets/8.jpg";
import img3 from "..//assets/10.jpg";

const Services = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={1000}
      >
        <div>
          <img src={img1} alt="Item1" />
          <p className="legend">Ladoo Prasad</p>
        </div>
        <div>
          <img src={img2} alt="Item3" />
          <p className="legend">Lockets</p>
        </div>
        <div>
          <img src={img3} alt="Item3" />
          <p className="legend">Janeyu</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
