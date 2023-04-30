
import { actionTypes } from "./actionTypes"


export const setProducts = (products)=>{
    return{
        type:actionTypes.SET_PRODUCTS,
        payload:products
    }
}

export const selectedProducts = (product)=>{
    return{
        type:actionTypes.SELECTED_PRODUCT,
        payload:product
    }
}

export const removeSelectedProducts = (products)=>{
    return{
        type:actionTypes.REMOVE_SELECTED_PRODUCT,
        payload:products
    }
}

export const addToCart = (product, quantity) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: { ...product, quantity },
  };
};


export const removeFromCart = (id)=>(dispatch)=>{
    dispatch({
        type:actionTypes.REMOVE_FROM_CART,
        payload:id
    })
}