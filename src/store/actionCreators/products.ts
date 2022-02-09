import { collection, getDocs, query, where } from "firebase/firestore";
import { Dispatch } from "react";
import { db } from "../../firebase";
import {
  GET_DRINKS_ERROR,
  GET_DRINKS_SUCCESS,
  GET_NUTS_ERROR,
  GET_NUTS_SUCCESS,
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
    } catch (error) {
      dispatch({
        type: GET_PRODUCTS_ERROR,
        payload: "произошла ошибка при загрузке",
      });
    }
  };
};
//GET DRINKS
export const getDrinks = () => {
  return async (dispatch: Dispatch<ProductAction>) => {
    try {
      const q = query(
        collection(db, "products"),
        where("category", "==", "drinks")
      );
      let docSnap = await getDocs(q);
      let products: any[] = [];
      docSnap.forEach((item) => {
        products.push({ ...item.data(), id: item.id });
      });
      dispatch({
        type: GET_DRINKS_SUCCESS,
        loading: false,
        payload: products,
      });
    } catch {
      dispatch({
        type: GET_DRINKS_ERROR,
        payload: "произошла ошибка при загрузке",
      });
    }
  };
};
//GET NUTS
export const getNuts = () => {
  return async (dispatch: Dispatch<ProductAction>) => {
    try {
      const q = query(
        collection(db, "products"),
        where("category", "==", "nuts")
      );
      let docSnap = await getDocs(q);
      let products: any[] = [];
      docSnap.forEach((item) => {
        products.push({ ...item.data(), id: item.id });
      });
      dispatch({
        type: GET_NUTS_SUCCESS,
        loading: false,
        payload: products,
      });
    } catch {
      dispatch({
        type: GET_NUTS_ERROR,
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
