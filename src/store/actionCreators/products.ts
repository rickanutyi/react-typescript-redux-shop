import { collection, getDocs, query } from "firebase/firestore";
import { Dispatch } from "react";
import { db } from "../../firebase";
import {
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  ProductAction,
  ProductType,
} from "../reducers/types";

export const getProducts = () => {
  return async (dispatch: Dispatch<ProductAction>) => {
    try {
      dispatch({ type: GET_PRODUCTS, loading: true });

      const q = query(collection(db, "products"));
      let docSnap = await getDocs(q);
      let products: any[] = [];
      docSnap.forEach((item) => {
        products.push({ ...item.data(), id: item.id });
      });
      console.log(products);
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        loading: false,
        payload: products,
      });
    } catch (error) {
      dispatch({
        type: GET_PRODUCTS_ERROR,
        payload: "произошла ошибка при загрузке",
      });
    }
  };
};
