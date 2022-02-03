import { collection, getDocs, query, where } from "firebase/firestore";
import { Dispatch } from "react";
import { db } from "../../firebase";
import {
  GET_DRINKS_SUCCESS,
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  ProductAction,
  ProductType,
} from "../reducers/types";

export const getProducts = (arg: string) => {
  return async (dispatch: Dispatch<ProductAction>) => {
    try {
      dispatch({ type: GET_PRODUCTS, loading: true });

      const q = query(
        collection(db, "products"),
        where("category", "==", `${arg}`)
      );
      let docSnap = await getDocs(q);
      let products: any[] = [];
      docSnap.forEach((item) => {
        products.push({ ...item.data(), id: item.id });
      });
      console.log(products);
      switch (arg) {
        case "ather":
          dispatch({
            type: GET_PRODUCTS_SUCCESS,
            loading: false,
            payload: products,
          });
          break;
        case "drinks":
          dispatch({
            type: GET_DRINKS_SUCCESS,
            loading: false,
            payload: products,
          });
          break;
      }
    } catch (error) {
      dispatch({
        type: GET_PRODUCTS_ERROR,
        payload: "произошла ошибка при загрузке",
      });
    }
  };
};

//get all products
export const getAllProducts = () => {
  return async (dispatch: Dispatch<ProductAction>) => {
    try {
      dispatch({ type: GET_PRODUCTS, loading: true });

      const q = query(collection(db, "products"));
      let docSnap = await getDocs(q);
      let products: any[] = [];
      docSnap.forEach((item) => {
        products.push({ ...item.data(), id: item.id });
      });
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        loading: false,
        payload: products,
      });
    } catch {
      dispatch({
        type: GET_PRODUCTS_ERROR,
        payload: "произошла ошибка при загрузке",
      });
    }
  };
};
