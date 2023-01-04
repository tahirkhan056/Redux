import {
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS,
} from "../Action/ActionType";
const initialState = {
  isLoading: false,
  products: [],
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        isloading: action.payload,
      };
    default:
      return state;
  }
};

export default ProductReducer;
