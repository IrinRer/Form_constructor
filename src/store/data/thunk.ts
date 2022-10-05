import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { api } from 'network';
import { DATA_SLICE_ALIAS } from './types';

export const dataFetchAction = createAsyncThunk(
  `${DATA_SLICE_ALIAS}/fetchData`,
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse = await api().get('/data');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
