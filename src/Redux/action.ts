import axios from "axios";

export const ALL_PRODUCTS = "ALL_PRODUCTS";

export const allProducts = () => {
  return async (dispatch: any) => {
    try {
      const endpoint = "http://localhost:3000/products";
      const { data } = await axios.get(endpoint);
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
