import {
  DefaultStateProducts,
  ProductAction,
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  GET_DRINKS_SUCCESS,
  GET_NUTS_SUCCESS,
} from "./types";

const defaultState: DefaultStateProducts = {
  products: [],
  drinks: [],
  nuts: [],
  loading: false,
  error: null,
};

export const productReducer = (
  state = defaultState,
  action: ProductAction
): DefaultStateProducts => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, loading: true, products: [] };
    case GET_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case GET_PRODUCTS_ERROR:
      return { ...state, error: action.payload };
    case GET_DRINKS_SUCCESS:
      return { ...state, loading: false, drinks: action.payload };
    case GET_NUTS_SUCCESS:
      return { ...state, loading: false, nuts: action.payload };
    default:
      return state;
  }
};
