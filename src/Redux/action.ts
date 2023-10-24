import axios from "axios";
export const ALL_PRODUCTS = "ALL_PRODUCTS";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const ADD_BAGS = "ADD_BAGS";
export const DELETE_BAGS = "DELETE_BAGS";

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
  //SOLICITA TODOS LOS PRODUCTOS DE UNA VEZ
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
  //OBIENE EL ID DEL PRODUCTO PARA PODER ELIMINARLO
  return {
    type: REMOVE_FAV,
    payload: product,
  };
};

export const addFav = (props: Props) => {
  //OBTIENE LOS DATOS DEL PRODUCTO PARA AGREFARLO A FAVORITOS
  return {
    type: ADD_FAV,
    payload: props,
  };
};

export const addBagS = (props: Props) => {
  //OBTIENE LOS DATOS DEL PRODUCTO PARA AGREGARLO A LA BOLSA DE COMPRA
  return {
    type: ADD_BAGS,
    payload: props,
  };
};

export const deleteBagS = (product: idProduct) => {
  //OBIENE EL ID DEL PRODUCTO PARA PODER ELIMINARLO
  console.log(product)
  return {
    type: DELETE_BAGS,
    payload: product,
  };
};
