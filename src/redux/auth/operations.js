import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// ================       https://connections-api.herokuapp.com
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// ====== Register Users {name, email, password}

export const fetchRegisterUsers = createAsyncThunk(
  'auth/registerUsers',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', userData);
      // console.log(`registerUsers`, response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// ====== Login Users {email, password}

export const fetchLoginUsers = createAsyncThunk(
  'auth/loginUsers',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', userData);
      // console.log(`fetchLoginUsers`, response);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// ====== Logout Users {token}

export const fetchLogoutUsers = createAsyncThunk(
  'auth/logoutUsers',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      clearAuthHeader();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// ====== Refresh Users {token}

export const fetchRefreshUsers = createAsyncThunk(
  'auth/refreshUsers',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const response = await axios.get('/users/current');
      // console.log(`fetchCurrentUsers`, response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
