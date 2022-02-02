import React, { FC, useEffect, useState } from "react";
import Card from "../ProductCard/Card";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/actionCreators/products";
import { useTypedSelector } from "../hooks/useTypedSelector";
import "./style/NewProducts.css";
import { ProductType } from "../../store/reducers/types";

const NewProducts: FC = () => {
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
    <h2>{error}</h2>;
  }
  return (
    <div className="new_products">
      <div className="container">
        <div className="new_products_items">
          <div className="new_products_title">Новые продукты</div>
          <div className="new_products_list">
            {product !== null && !!product.length
              ? product.map((prod) => <Card key={prod.id} product={prod} />)
              : error}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
