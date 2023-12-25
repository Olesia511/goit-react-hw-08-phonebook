import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };
// ====== Fetch User Contacts

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    console.log(`persistedToken`, persistedToken);
    try {
      const response = await axios.get('/contacts');
      console.log(`fetchContacts`, response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// ====== Add User Contacts

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (userData, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    console.log(`persistedToken`, persistedToken);
    try {
      const response = await axios.post('/contacts', userData);
      console.log(`addContact`, response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// ====== Delete User Contacts

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// ====== Update User Contacts

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
