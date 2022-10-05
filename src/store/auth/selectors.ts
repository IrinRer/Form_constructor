import { RootState } from 'store';

export const getLogin = (state: RootState) => state.auth.inputLogin;
export const getPassword = (state: RootState) => state.auth.inputPassword;
export const getAuth = (state: RootState) => state.auth.auth;
