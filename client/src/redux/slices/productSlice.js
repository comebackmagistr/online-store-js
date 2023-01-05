import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const userSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setProducts: (state, action) => action.payload,
  },
});

export const { setProducts } = userSlice.actions;

const getAllProducts = () => async (dispatch) => {
  const res = await axios('api/product/');
  dispatch(setProducts(res.data));
};

const getIdCathegory = (id) => async (dispatch) => {
  const res = await axios(`api/product/${id}`);
  dispatch(setProducts(res.data));
};

export default userSlice.reducer;

export { getAllProducts, getIdCathegory };
