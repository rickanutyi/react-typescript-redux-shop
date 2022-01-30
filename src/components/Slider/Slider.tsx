import React from "react";
import "./style/Slider.css";
import Fruits from "../../assets/images/slider.jpg";

const Slider = () => {
  return (
    <div className="slider">
      <div className="container">
        <div className="slider_images">
          <img src={Fruits} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
