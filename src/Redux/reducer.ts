/* eslint-disable no-case-declarations */
import { ADD_BAGS, ADD_FAV, ALL_PRODUCTS, REMOVE_FAV } from "./action";

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

    case REMOVE_FAV: //Elimina un nuevo producto
      return {
        ...state,
        favorites: state.favorites.filter(
          (product) => product.id !== action.payload.id
        ),
      };

    case ADD_BAGS:
      return {
        ...state,
        bag: [...state.bag, action.payload],
      };

    default:
      return state;
  }
};

export default productReducer;
