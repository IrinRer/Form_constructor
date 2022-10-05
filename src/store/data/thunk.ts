import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { api } from 'network';
import {
  DATA_SLICE_ALIAS,
  NAMES_SLICE_ALIAS,
  DATAPOST_SLICE_ALIAS,
} from './types';

export const dataFetchAction = createAsyncThunk(
  `${DATA_SLICE_ALIAS}/fetchData`,
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse = await api().get('/collection');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

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
  `${DATAPOST_SLICE_ALIAS}/dataPost`,
  async (
    { name, document }: { name: string; document: string },
    { rejectWithValue },
  ) => {
    try {
      await api().post('/collection', {
        name,
        document,
        id: `${name}${document}`,
      });

      return { name, document };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
