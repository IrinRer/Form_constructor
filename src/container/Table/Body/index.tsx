import { useAppSelector } from 'hooks/redux/useAppSelector';
import React, { ReactElement } from 'react';
import { getCollectionForTable } from 'store/data/selectors';

const TableBody = () => {
  const collection = useAppSelector(getCollectionForTable);

  const getContent = () => {
    const arr: Array<ReactElement> = [];
    for (const keyItem in collection) {
      arr.push(
        <tr key={keyItem}>
          <td>{keyItem}</td>
          <td>{collection[keyItem]}</td>
        </tr>,
      );
    }

    return arr;
  };

  const data = getContent();

  return <>{data.map((item: ReactElement) => item)}</>;
};

export default TableBody;
