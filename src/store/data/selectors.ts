import { RootState } from 'store';

export const getNames = (state: RootState) => state.data.names;
export const getName = (state: RootState) => state.data.name;
export const getDocument = (state: RootState) => state.data.document;
