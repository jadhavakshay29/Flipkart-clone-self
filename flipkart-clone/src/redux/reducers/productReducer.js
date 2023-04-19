import { actionTypes } from "../actions/actionTypes";

const initialState = {
    products:[]
  
}

export const productReducer =(state = initialState, {type, payload})=>{
    switch (type) {
        case actionTypes.SET_PRODUCTS:
             return {...state, products:payload};
        default:
            return state;
    }
}

export const selectedProductReducer = (state={}, {type,payload})=>{
    switch (type) {
        case actionTypes.SELECTED_PRODUCT:
            return {...state, ...payload}
        default:
            return state;
    }
}