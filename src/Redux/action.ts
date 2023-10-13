import axios from "axios";
export const ALL_PRODUCTS = "ALL_PRODUCTS";
export const REMOVE_FAV = "REMOVE_FAV";
export const ADD_FAV = "ADD_FAV";

interface Products {
  id: string;
  name: string;
  image: string[];
  price: number;
  composition: string;
  description: string;
  brandName: string;
}

interface idProduct {
  id: string;
}

interface Props {
  id: string;
  name: string;
  image: string[];
  price: number;
  brand: string;
}

export const allProducts = () => {
  return async (dispatch: any) => {
    try {
      const endpoint = "http://localhost:3000/products";
      const { data } = await axios.get<Products[]>(endpoint);
      dispatch({
        type: ALL_PRODUCTS,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const removeFav = (product: idProduct) => {
  return {
    type: REMOVE_FAV,
    payload: product,
  };
};

export const addFav = (props: Props) => {
  return {
    type: ADD_FAV,
    payload: props,
  };
};
