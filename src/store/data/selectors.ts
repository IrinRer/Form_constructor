import { RootState } from 'store';

export const getNames = (state: RootState) => state.data.names;
export const getName = (state: RootState) => state.data.name;
export const getDocument = (state: RootState) => state.data.document;
export const isNotUnique = (state: RootState) => {
  return state.data.data.filter((item) => {
    return (
      item.document === state.data.postData?.document &&
      item.name === state.data.postData?.name
    );
  });
};
