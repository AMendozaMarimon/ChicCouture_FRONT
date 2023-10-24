/* eslint-disable no-case-declarations */
import {
  ADD_BAGS,
  ADD_FAV,
  ALL_PRODUCTS,
  DELETE_BAGS,
  REMOVE_FAV,
} from "./action";

interface isProduct {
  id: string;
  name: string;
  image: string[];
  price: number;
  brand: string;
}

const initialState = {
  products: [],
  favorites: [] as isProduct[],
  bag: [] as isProduct[],
};

const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ALL_PRODUCTS: //Se trae todos los productos
      return {
        ...state,
        products: action.payload,
      };

    case ADD_FAV: //Agrega un nuevo producto a favorito
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case REMOVE_FAV: //Elimina el producto en específico de Favoritos
      return {
        ...state,
        favorites: state.favorites.filter(
          (product) => product.id !== action.payload.id
        ),
      };

    case ADD_BAGS: //Agrega un nuevo producto a la Bolsa de Compras
      return {
        ...state,
        bag: [...state.bag, action.payload],
      };

    case DELETE_BAGS: //Elimina el producto en específico de la Bolsa de Compras
    console.log(action.payload)
      return {
        ...state,
        bag: state.bag.filter((product) => product.id !== action.payload),
      };

    default:
      return state;
  }
};

export default productReducer;
