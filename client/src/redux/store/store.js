import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';
import productReducer from '../slices/productSlice';
import cathegoryReducer from '../slices/cathegorySlice';
import bascketReducer from '../slices/basketSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
    cathegories: cathegoryReducer,
    basket: bascketReducer,
  },
});

export default store;
