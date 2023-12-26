import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// ====== Fetch User Contacts

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');

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
    try {
      const response = await axios.post('/contacts', userData);
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
