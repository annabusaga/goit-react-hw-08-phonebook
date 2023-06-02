import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
        const result = await axios.post('/users/signup', credentials);
        axios.defaults.headers.common.Authorization = `Bearer ${result.data.token}`;
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
