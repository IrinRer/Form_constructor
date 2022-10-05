import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { api } from 'network';
import { DATA_SLICE_ALIAS, NAMES_SLICE_ALIAS } from './types';

export const namesFetchAction = createAsyncThunk(
  `${NAMES_SLICE_ALIAS}/fetchNames`,
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse = await api().get('/name_constructors');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const dataPostAction = createAsyncThunk(
  `${DATA_SLICE_ALIAS}/fetchData`,
  async (
    { name, document }: { name: string; document: string },
    { rejectWithValue },
  ) => {
    try {
      const response: AxiosResponse = await api().post('/collection', {
        name,
        document,
        id: `${name}${document}`,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
