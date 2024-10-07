import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: '',
  token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    logout: (state, _action) => {
      state.user = '';
      state.token = '';
    },
  },
});

export const authReducer = authSlice.reducer;
export const { setUser, logout } = authSlice.actions;
