import { AxiosError } from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DATA_SLICE_ALIAS } from './types';
import { namesFetchAction } from './thunk';

const initialState: any = {
  names: [],
  name: '',
  document: '',
  loading: false,
  error: null,
};

export const dataSlice = createSlice({
  name: DATA_SLICE_ALIAS,
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setDocument: (state, action) => {
      state.document = action.payload;
    },
  },
  extraReducers: {
    [namesFetchAction.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [namesFetchAction.fulfilled.type]: (
      state,
      { payload }: PayloadAction<any>,
    ) => {
      state.names = payload;
    },

    [namesFetchAction.rejected.type]: (
      state,
      { payload }: PayloadAction<AxiosError>,
    ) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { setName, setDocument } = dataSlice.actions;
export default dataSlice.reducer;
