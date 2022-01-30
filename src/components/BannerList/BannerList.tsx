import React from "react";
import "./style/BannerList.css";
import Tort from "../../assets/images/tort.jpg";
import Fishes from "../../assets/images/fishes.jpg";
import Banner from "../../assets/images/banner1.jpg";
import Banner2 from "../../assets/images/banner2.jpeg";
import Banner3 from "../../assets/images/baner3.jpg";

const BannerList = () => {
  return (
    <div className="banner_list">
      <div className="container">
        <div className="banner_list-top">
          <div className="top-left">
            <img src={Tort} alt="" />
            <div className="description">Торты, десерты, сладкая выпечка</div>
          </div>
          <div className="top-right">
            <img src={Fishes} alt="" />
            <div className="description">Рыба, икра, морепродукты</div>
          </div>
        </div>
        {/* bottom */}
        <div className="banner_list-bottom">
          <div className="banner_item">
            <img src={Banner} alt="" />
            <div className="banner_item_description">Баннер</div>
          </div>
          <div className="banner_item">
            <img src={Banner2} alt="" />
            <div className="banner_item_description">Баннер</div>
          </div>
          <div className="banner_item">
            <img src={Banner3} alt="" />
            <div className="banner_item_description">Баннер</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerList;
