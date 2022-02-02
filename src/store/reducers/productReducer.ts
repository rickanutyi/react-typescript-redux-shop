import {
  DefaultStateProducts,
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  ProductAction,
} from "./types";

const defaultState: DefaultStateProducts = {
  products: [],
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
    default:
      return state;
  }
};
