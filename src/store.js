import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ProductReducer from "./Reducer/ProductReducer";

const store = createStore(ProductReducer, applyMiddleware(thunk));

export default store;
