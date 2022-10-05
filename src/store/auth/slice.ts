import { AxiosError } from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authorizationAction } from './thunk';
import { AUTHORIZATION_SLICE_ALIAS, IAuthSlice } from './types';

const initialState: IAuthSlice = {
  auth: '',
  login: '',
  password: '',
  inputLogin: '',
  inputPassword: '',
  loading: false,
  error: null,
};

export const authorizationSlice = createSlice({
  name: AUTHORIZATION_SLICE_ALIAS,
  initialState,
  reducers: {
    authorization: (state) => {
      if (
        state.inputLogin === state.login &&
        state.inputPassword === state.password
      ) {
        state.auth = 'yes';
      } else {
        state.auth = 'no';
      }
    },
    changeInputLogin: (state, action: PayloadAction<string>) => {
      state.inputLogin = action.payload;
    },
    changeInputPassword: (state, action: PayloadAction<string>) => {
      state.inputPassword = action.payload;
    },
    resetAuthorization: (state) => {
      state.auth = initialState.auth;
      state.inputLogin = initialState.inputLogin;
      state.inputPassword = initialState.inputLogin;
    },
  },
  extraReducers: {
    [authorizationAction.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [authorizationAction.fulfilled.type]: (
      state,
      { payload }: PayloadAction<{ login: string; password: string }>,
    ) => {
      state.login = payload.login;
      state.password = payload.password;
    },

    [authorizationAction.rejected.type]: (
      state,
      { payload }: PayloadAction<AxiosError>,
    ) => {
      state.login = '';
      state.password = '';
      state.inputLogin = '';
      state.inputPassword = '';
      state.loading = false;
      state.error = payload;
    },
  },
});

export const {
  authorization,
  resetAuthorization,
  changeInputLogin,
  changeInputPassword,
} = authorizationSlice.actions;
export default authorizationSlice.reducer;
