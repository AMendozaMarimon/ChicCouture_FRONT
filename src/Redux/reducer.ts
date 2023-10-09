import { ALL_PRODUCTS } from "./action";

const initialState = {
  products: [],
};

const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
