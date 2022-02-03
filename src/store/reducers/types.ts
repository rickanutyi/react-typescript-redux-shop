export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUTCS_SUCCESS";
export const GET_PRODUCTS_ERROR = "GET_PRODUTCS_ERROR";
export const GET_DRINKS = "GET_DRINKS";
export const GET_DRINKS_SUCCESS = "GET_DRINKS_SUCCESS";
export const GET_DRINKS_ERROR = "GET_DRINKS_ERROR";
export const GET_NUTS = "GET_NUTS";
export const GET_NUTS_SUCCESS = "GET_NUTS_SUCCESS";
export const GET_NUTS_ERROR = "GET_NUTS_ERROR";

export type ProductType = {
  name: string;
  discount: number;
  price: number;
  description: string;
  status: string;
  weight: number;
  rating: number;
  images: Array<string>;
  id: string;
};
export type DefaultStateProducts = {
  products: ProductType[] | null;
  drinks: ProductType[] | null;
  nuts: ProductType[] | null;
  loading?: boolean;
  error?: string | null;
};
//GET ALL
export type GetProductsActionType = {
  type: typeof GET_PRODUCTS | typeof GET_DRINKS | typeof GET_NUTS;
  loading: boolean;
};
export type GetProductsSuccessActionType = {
  type:
    | typeof GET_PRODUCTS_SUCCESS
    | typeof GET_DRINKS_SUCCESS
    | typeof GET_NUTS_SUCCESS;
  loading: boolean;
  payload: any[] | null | ProductType[];
};
export type GetProductsErrorActionType = {
  type:
    | typeof GET_PRODUCTS_ERROR
    | typeof GET_DRINKS_ERROR
    | typeof GET_NUTS_ERROR;
  payload: string;
};
//GET DRINKS
export type ProductAction =
  | GetProductsActionType
  | GetProductsSuccessActionType
  | GetProductsErrorActionType;
