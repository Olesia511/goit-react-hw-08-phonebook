import { createSlice } from '@reduxjs/toolkit';
import {
  fetchLoginUsers,
  fetchLogoutUsers,
  fetchRefreshUsers,
  fetchRegisterUsers,
} from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefresh: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchRegisterUsers.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(fetchLoginUsers.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(fetchLogoutUsers.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(fetchRefreshUsers.pending, state => {
        state.isRefresh = true;
      })
      .addCase(fetchRefreshUsers.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefresh = false;
      })
      .addCase(fetchRefreshUsers.rejected, state => {
        state.isRefresh = false;
      });
  },
});

export const authReducer = authSlice.reducer;
