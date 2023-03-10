import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const basketSlice = createSlice({
  name: 'basket',
  initialState: [],
  reducers: {
    setBasketItems: (state, action) => action.payload,
    addBasketItems: (state, action) => [...state, action.payload],
    deleteBasketItems: (state, action) => state.filter((el) => el.id !== Number(action.payload)),
  },
});

export const { setBasketItems, addBasketItems, deleteBasketItems } = basketSlice.actions;

const getAllBasketItemsForUser = () => async (dispatch) => {
  const res = await axios('api/basket/');
  dispatch(setBasketItems(res.data));
};

const addBasketItemForUser = (id) => async (dispatch) => {
  const res = await axios.post('api/basket/item', id);
  dispatch(addBasketItems(res.data));
};

const deleteBasketItemForUser = ({ id }) => async (dispatch) => {
  const res = await axios.delete(`/api/basket/deleteitem/${id}`);
  dispatch(deleteBasketItems(res.data));
};

const submitBasketOrder = () => async (dispatch) => {
  await axios.delete('/api/basket/order');
  dispatch(setBasketItems([]));
};

export default basketSlice.reducer;

export {
  getAllBasketItemsForUser, addBasketItemForUser, deleteBasketItemForUser, submitBasketOrder,
};
