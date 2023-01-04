import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';
import productReducer from '../slices/productSlice';
import cathegoryReducer from '../slices/cathegorySlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
    cathegories: cathegoryReducer,
  },
});

export default store;
