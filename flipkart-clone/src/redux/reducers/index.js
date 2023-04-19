import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

export const reducer = combineReducers({
    allProducts: productReducer,
    products:selectedProductReducer
});

