import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://6477b0309233e82dd53c0900.mockapi.io';
export const fetchContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkAPI) => {
    try {
      const result = await axios('/contacts');
      return result.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const result = await axios.post('/contacts', newContact);

      return result.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const result = await axios.delete(`/contacts/${id}`);

      return result.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
