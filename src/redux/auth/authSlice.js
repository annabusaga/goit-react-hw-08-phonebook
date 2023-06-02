import { register } from './operations';
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: '',
      email: '',
    },
    token: null,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(register.fulfilled, (state, payload) => {
        state.isLoading = false;
        state.user = payload.user;
        state.token = payload.token;
      })

      .addCase(register.rejected, (state, payload) => {
        state.isLoading = false;
        state.error = payload;
        state.token = payload.token;
      });
  },
});

export const authReducer = authSlice.reducer;
