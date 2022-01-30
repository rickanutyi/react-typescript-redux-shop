import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "../components/Admin/Admin";
import Login from "../components/Auth/Login";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import NewProducts from "../components/NewProducts/NewProducts";
import ProductDteils from "../components/ProductDetails/ProductDetails";
import Profile from "../components/Profile/Profile";
import Slider from "../components/Slider/Slider";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <div className="main">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/details/:id" element={<ProductDteils />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default MainRoutes;
