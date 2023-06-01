import { actionTypes } from "../actions/actionTypes";

const initialState = {
    products:[],
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
        case actionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state;
    }
}

export const cartReducer = (state= {cartItems:[]}, action)=>{
   switch (action.type) {
    case actionTypes.ADD_TO_CART:
        const item = action.payload;
        const exist = state.cartItems.find(products=> products.id === item.id);
        if(exist){
            return {...state, cartItems: state.cartItems.map(data => data.products === exist.products ? item : data)}
        }else{
            return {...state, cartItems : [...state.cartItems, item]}
        }
        
    case actionTypes.REMOVE_FROM_CART:
         return {...state, cartItems: state.cartItems.filter(products=> products.id !== action.payload)}

         default:
            return state;
   }
}
