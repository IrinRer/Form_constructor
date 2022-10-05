import { AxiosError } from 'axios';

export const DATA_SLICE_ALIAS = 'data';
export const NAMES_SLICE_ALIAS = 'names';
export const DATAPOST_SLICE_ALIAS = 'dataPost';

export interface ICollectionItem {
    name: string;
    document: string;
    id?: string | number;
}

export interface IDataSlice {
    names: Array<string>,
    postData: ICollectionItem,
    data: Array<ICollectionItem>,
    name: string,
    document: string,
    loading: boolean;
    error: AxiosError | null;
}
