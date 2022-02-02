import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../store/actionCreators/products";
import { ProductType } from "../../store/reducers/types";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Card from "../ProductCard/Card";
import "./style/ProductsList.css";

const ProductsList = () => {
  let arr = [11, 22, 33, 44, 55];
  const dispatch = useDispatch();
  const { products, loading, error } = useTypedSelector(
    (state) => state.products
  );
  const [product, setProducts] = useState<ProductType[] | null>([]);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  useEffect(() => {
    setProducts(products);
  }, [products]);
  if (loading) {
    return <h1>loading</h1>;
  }

  if (error) {
    console.log("22error");
    return <h1>{error}</h1>;
  }
  const drinks =
    product !== null
      ? product.map((prod) => <Card key={prod.id} product={prod} />)
      : null;
  return (
    <div className="products_list">
      <div className="container">
        <div className="products_list_content">{drinks}</div>
      </div>
    </div>
  );
};

export default ProductsList;
