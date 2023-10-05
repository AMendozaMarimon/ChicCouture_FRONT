import { ALL_PRODUCTS } from "./action";

const initialState = {
  loading: false,
  products: [],
  error: null,
};

const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ALL_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: null,
      };

    default:
      return state;
  }
};

export default productReducer;
