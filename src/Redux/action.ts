import axios from "axios";
export const ALL_PRODUCTS = "ALL_PRODUCTS";

interface Products {
  id: string;
  name: string;
  image: string[];
  price: number;
  composition: string;
  description: string;
  brandName: string;
}

export const allProducts = () => {
  return async (dispatch: any) => {
    try {
      const endpoint = "http://localhost:3000/products";
      const { data } = await axios.get<Products[]>(endpoint);
      console.log(data);
      dispatch({
        type: ALL_PRODUCTS,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
