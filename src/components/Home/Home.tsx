import React, { useEffect, useState } from "react";
import "./Home.css";
import BannerList from "../BannerList/BannerList";
import NewProducts from "../NewProducts/NewProducts";
import OrderDesserts from "../OrderDesserts/OrderDesserts";
import ProductsList from "../ProductsList/ProductsList";
import Slider from "../Slider/Slider";
import Reviews from "../Reviews/Reviews";
import Feedabck from "../Feedback/Feedabck";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import {
  getDrinks,
  getNuts,
  getProducts,
} from "../../store/actionCreators/products";
import { ProductType } from "../../store/reducers/types";

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error, drinks, nuts } = useTypedSelector(
    (state) => state.products
  );

  const [drink, setDrinks] = useState<ProductType[] | null>([]);
  const [nut, setNuts] = useState<ProductType[] | null>([]);

  useEffect(() => {
    dispatch(getDrinks());
    dispatch(getNuts());
  }, []);

  useEffect(() => {
    setDrinks(drinks);
    setNuts(nuts);
  }, [drinks, nuts]);
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
      <ProductsList key="напитки" drink={drink} />
      <div className="some_title">
        <div className="container">
          <h2>Орехи</h2>
        </div>
      </div>
      <ProductsList key="орехи" nut={nut} />
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
