import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../../store/actionCreators/products";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import "./AllProducts.css";

type Props = {
  setProduct: (arg: any) => void;
};
const AllProducts: FC<Props> = ({ setProduct }) => {
  const { products, loading } = useTypedSelector((state) => state.products);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div className="all_products">
      {products !== null
        ? products.map((item) => (
            <div key={item.id} className="mini_card">
              <div className="product_name">{item.name}</div>
              <div
                onClick={() => navigate(`/details/${item.id}`)}
                className="product_image"
              >
                <img width="200px" height="200px" src={item.images[0]} alt="" />
              </div>
              <div className="actions">
                <button onClick={() => setProduct(item)}>изменить</button>
                <button>удалить</button>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default AllProducts;
