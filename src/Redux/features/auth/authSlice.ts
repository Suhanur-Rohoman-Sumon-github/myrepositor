import { createSlice } from '@reduxjs/toolkit';

// type TState = {
//   user: TUser;
//   token: string;
// };

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

    logout: state => {
      state.user = '';
      state.token = '';
    },
  },
});

export const authReducer = authSlice.reducer;
export const { setUser, logout } = authSlice.actions;
