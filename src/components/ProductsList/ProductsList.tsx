import React, { FC } from "react";
import { ProductType } from "../../store/reducers/types";
import Card from "../ProductCard/Card";
import "./style/ProductsList.css";

type Props = {
  loading?: boolean;
  error?: string;
  drink?: ProductType[] | null;
  nut?: ProductType[] | null;
};
const ProductsList: FC<Props> = ({ loading, error, drink, nut }) => {
  if (loading) {
    return <h1>loading</h1>;
  }

  if (error) {
    console.log("22error");
    return <h1>{error}</h1>;
  }

  let products;
  if (drink) {
    products =
      drink !== null
        ? drink.map((prod) => <Card key={prod.id} product={prod} />)
        : null;
  }
  if (nut) {
    products =
      nut !== null
        ? nut.map((prod) => <Card key={prod.id} product={prod} />)
        : null;
  }
  console.log(drink);
  return (
    <div className="products_list">
      <div className="container">
        <div className="products_list_content">{products}</div>
      </div>
    </div>
  );
};

export default ProductsList;
