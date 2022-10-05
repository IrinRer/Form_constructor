import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { ICollectionForTable } from './types';

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
export const getCollection = (state: RootState) => state.data.data;

export const getCollectionForTable = createSelector(
  getCollection,
  (collection) => {
    const arr: Array<ICollectionForTable> = [];

    for (const item1 of collection) {
      let num = 0;
      for (const item2 of collection) {
        if (item1.document === item2.document) {
          num += 1;
        }
      }

      arr.push({ document: item1.document, num });
    }

    return arr
      .filter(
        (item: ICollectionForTable, i: number) =>
          arr.findIndex((a: any) => a.document === item.document) === i,
      )
      .sort((a: ICollectionForTable, b: ICollectionForTable) => b.num - a.num);
  },
);
