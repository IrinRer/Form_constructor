import { configureStore } from '@reduxjs/toolkit';
import AuthorizationReducer from './auth/slice';
import  DataReducer from './data/slice';


import { IAuthSlice } from './auth/types';


export const store = configureStore({
  reducer: {
    auth: AuthorizationReducer,
    data: DataReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = {
  auth: IAuthSlice;
  data: any;
};

export type AppDispatch = typeof store.dispatch;