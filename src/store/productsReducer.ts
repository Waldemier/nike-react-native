import {createSlice} from "@reduxjs/toolkit";
import products from '../../src/data/products.json';

const initialState = {
    products: products
};

export const productsReducer = createSlice({
   name: 'products',
   initialState,
   reducers: {}
});