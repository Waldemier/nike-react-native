import {createSlice} from "@reduxjs/toolkit";
import {CartItemType} from "../types/cartProductType";

const initialState: { cart: CartItemType[] } = {
  cart: []
};

export const cartReducer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            console.log(state.cart, action);
            state.cart = [...state.cart, action.payload];
        }
    }
});
