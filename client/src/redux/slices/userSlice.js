import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const userSlice = createSlice({
  name: 'user',
  initialState: [],
  reducers: {
    setUser: (state, action) => action.payload,
  },
});

export const { setUser } = userSlice.actions;

const getRegistrationUserInfo = (data) => async (dispatch) => {
  const res = await axios.post('api/user/registration', data);
  dispatch(setUser(res.data));
};

const getLoginUserInfo = (data) => async (dispatch) => {
  const res = await axios.post('api/user/login', data);
  dispatch(setUser(res.data));
};

const isAuth = () => async (dispatch) => {
  const res = await axios('api/user/check');
  dispatch(setUser(res.data));
};

const getUserLogout = () => async (dispatch) => {
  const res = await axios('api/user/logout');
  dispatch(setUser(res.data));
};

export default userSlice.reducer;

export {
  getRegistrationUserInfo, getLoginUserInfo, isAuth, getUserLogout,
};
