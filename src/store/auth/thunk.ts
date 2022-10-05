import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { api } from 'network';
import { AUTHORIZATION_SLICE_ALIAS } from './types';

export const authorizationAction = createAsyncThunk(
  `${AUTHORIZATION_SLICE_ALIAS}/authorization`,
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse = await api().get('/authorization');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
