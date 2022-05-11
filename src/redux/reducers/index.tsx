import { combineReducers } from "redux";
import ProductReducer from "./productsReducer";
const reducers = combineReducers({
  products: ProductReducer,
});

export default reducers;
