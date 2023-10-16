import {configureStore} from "@reduxjs/toolkit";
import {productsReducer} from "./productsReducer";
import {cartReducer} from "./cartReducer";

export const store = configureStore({
    reducer: {
        products: productsReducer.reducer,
        cart: cartReducer.reducer
    }
});