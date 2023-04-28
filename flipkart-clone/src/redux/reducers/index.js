import { combineReducers } from "redux";
import { productReducer, selectedProductReducer,cartReducer } from "./productReducer";

export const reducer = combineReducers({
    allProducts: productReducer,
    products:selectedProductReducer,
    cart:cartReducer
});

