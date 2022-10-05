import { configureStore } from '@reduxjs/toolkit';
import AuthorizationReducer from './auth/slice';
import  DataReducer from './data/slice';


import { IAuthSlice } from './auth/types';
import { IDataSlice } from './data/types';


export const store = configureStore({
  reducer: {
    auth: AuthorizationReducer,
    data: DataReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = {
  auth: IAuthSlice;
  data: IDataSlice;
};

export type AppDispatch = typeof store.dispatch;