import React, { useEffect } from "react";
import "./Home.css";
import BannerList from "../BannerList/BannerList";
import NewProducts from "../NewProducts/NewProducts";
import OrderDesserts from "../OrderDesserts/OrderDesserts";
import ProductsList from "../ProductsList/ProductsList";
import Slider from "../Slider/Slider";
import Reviews from "../Reviews/Reviews";
import Feedabck from "../Feedback/Feedabck";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <NewProducts />
      <BannerList />
      <OrderDesserts />
      <div className="some_title">
        <div className="container">
          <h2>Вода, соки, напитки</h2>
        </div>
      </div>
      <ProductsList key="orehi" />
      <div className="some_title">
        <div className="container">
          <h2>Орехи</h2>
        </div>
      </div>
      <ProductsList key="otzyvy" />
      <div className="some_title">
        <div className="container">
          <h2>Отзывы клиииентов</h2>
        </div>
      </div>
      <Reviews />
      <Feedabck />
    </div>
  );
};

export default Home;
