import { useAppSelector } from 'hooks/redux/useAppSelector';
import React from 'react';
import { getCollectionForTable } from 'store/data/selectors';

const TableBody = () => {
  const collection = useAppSelector(getCollectionForTable);

  return (
    <>
      {collection.map((item) => (
        <tr key={item.document}>
          <td>{item.document}</td>
          <td>{item.num}</td>
        </tr>
      ))}
    </>
  );
};

export default TableBody;
