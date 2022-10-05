import { AxiosError } from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DATA_SLICE_ALIAS } from './types';
import { dataFetchAction } from './thunk';


const initialState: any = {
  names: [],
  loading: false,
  error: null,
};

export const dataSlice = createSlice({
  name: DATA_SLICE_ALIAS,
  initialState,
  reducers: {},
  extraReducers: {
    [dataFetchAction.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [dataFetchAction.fulfilled.type]: (
      state,
      { payload }: PayloadAction<any>,
    ) => {
      state.names = payload.name_constructors
    },

    [dataFetchAction.rejected.type]: (
      state,
      { payload }: PayloadAction<AxiosError>,
    ) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

// export const {
//   authorization,
//   resetAuthorization,
//   changeInputLogin,
//   changeInputPassword,
// } = authorizationSlice.actions;
export default dataSlice.reducer;