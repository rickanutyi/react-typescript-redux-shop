export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUTCS_SUCCESS";
export const GET_PRODUCTS_ERROR = "GET_PRODUTCS_ERROR";

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
  loading?: boolean;
  error?: string | null;
};

export type GetProductsActionType = {
  type: typeof GET_PRODUCTS;
  loading: boolean;
};
export type GetProductsSuccessActionType = {
  type: typeof GET_PRODUCTS_SUCCESS;
  loading: boolean;
  payload: any[] | null | ProductType[];
};
export type GetProductsErrorActionType = {
  type: typeof GET_PRODUCTS_ERROR;
  payload: string;
};

export type ProductAction =
  | GetProductsActionType
  | GetProductsSuccessActionType
  | GetProductsErrorActionType;
