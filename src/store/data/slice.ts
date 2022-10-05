import { dataFetchAction, dataPostAction } from 'store/data/thunk';
import { AxiosError } from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DATA_SLICE_ALIAS, ICollectionItem, IDataSlice } from './types';
import { namesFetchAction } from './thunk';

const initialState: IDataSlice = {
  names: [],
  postData: { name: '', document: '' },
  data: [],
  name: '',
  document: '',
  loading: false,
  error: null,
};

export const dataSlice = createSlice({
  name: DATA_SLICE_ALIAS,
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
      state.postData.name = action.payload;
    },
    setDocument: (state, action: PayloadAction<string>) => {
      state.document = action.payload;
      state.postData.document = action.payload;
    },
    clearNameDocument: (state) => {
      state.document = '';
      state.name = '';
    },
  },
  extraReducers: {
    [namesFetchAction.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [namesFetchAction.fulfilled.type]: (
      state,
      { payload }: PayloadAction<Array<string>>,
    ) => {
      state.names = payload;
    },

    [namesFetchAction.rejected.type]: (
      state,
      { payload }: PayloadAction<AxiosError>,
    ) => {
      state.loading = false;
      state.error = payload;
      state.names = [];
    },

    [dataFetchAction.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [dataFetchAction.fulfilled.type]: (
      state,
      { payload }: PayloadAction<Array<ICollectionItem>>,
    ) => {
      state.data = payload;
    },

    [ dataPostAction.fulfilled.type]: (
      state,
      { payload }: PayloadAction<ICollectionItem>,
    ) => {
      state.data.push(payload);
    },

    [dataFetchAction.rejected.type]: (
      state,
      { payload }: PayloadAction<AxiosError>,
    ) => {
      state.loading = false;
      state.error = payload;
      state.data = [];
    },
  },
});

export const { setName, setDocument, clearNameDocument } = dataSlice.actions;
export default dataSlice.reducer;
