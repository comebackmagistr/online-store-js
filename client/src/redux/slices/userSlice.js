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

export default userSlice.reducer;

export { getRegistrationUserInfo };
