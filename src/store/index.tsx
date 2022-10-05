import { configureStore } from '@reduxjs/toolkit';
import AuthorizationReducer from './auth/slice';


import { IAuthSlice } from './auth/types';


export const store = configureStore({
  reducer: {
    auth: AuthorizationReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = {
  auth: IAuthSlice;
};

export type AppDispatch = typeof store.dispatch;