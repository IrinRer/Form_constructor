import { AxiosError } from 'axios';

export const AUTHORIZATION_SLICE_ALIAS = 'authorization';

export interface IAuthSlice {
  auth: string;
  login?: string;
  password?: string;
  inputLogin?: string;
  inputPassword?: string;
  loading: boolean;
  error: AxiosError | null;
}
