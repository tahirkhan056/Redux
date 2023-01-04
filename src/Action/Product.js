import axios from "axios";
import { GET_ALL_PRODUCTS, GET_ALL_PRODUCTS_SUCCESS } from "./ActionType";

export const getProducts = () => {
  return (dispatch) => {
    dispatch(getAllProductRequest(true));
    axios
      .get("http://api.tvmaze.com/shows")
      .then((response) => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        dispatch(getAllProductRequest(false));
        return response;
      })
      .then((response) => dispatch(getAllProductSuccess(response.data)));
  };
};

export const getAllProductRequest = (data) => {
  return {
    type: GET_ALL_PRODUCTS,
    payload: { isLoading: data },
  };
};

export const getAllProductSuccess = (data) => {
  return {
    type: GET_ALL_PRODUCTS_SUCCESS,
    payload: data,
  };
};
