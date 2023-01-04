import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const userSlice = createSlice({
  name: 'cathegories',
  initialState: [],
  reducers: {
    setCathegories: (state, action) => action.payload,
  },
});

export const { setCathegories } = userSlice.actions;

const getAllCathegories = () => async (dispatch) => {
  const res = await axios('api/cathegory/');
  dispatch(setCathegories(res.data));
};

export default userSlice.reducer;

export { getAllCathegories };
