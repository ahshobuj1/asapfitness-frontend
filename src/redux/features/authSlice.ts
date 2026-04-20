import {createSlice} from '@reduxjs/toolkit';

export type TUser = {
  id: string;
  role: string;
  email: string;
};

type TAuthState = {
  user: null | TUser;
  token: null | string;
  lastActivity: null | number;
};

const initialState: TAuthState = {
  user: null,
  token: null,
  lastActivity: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const {user, token} = action.payload;
      state.user = user;
      state.token = token;
      state.lastActivity = Date.now();
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.lastActivity = null;
    },
    setLastActivity: (state, action) => {
      state.lastActivity = action.payload;
    },
  },
});

export const {setUser, logout, setLastActivity} = authSlice.actions;
export default authSlice.reducer;
