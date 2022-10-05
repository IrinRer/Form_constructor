import React from 'react';
import TableBody from './Body';
import styles from './index.module.scss';

const Table = () => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Наименование документа</th>
          <th>Количество заявок</th>
        </tr>
      </thead>
      <tbody>
        <TableBody />
      </tbody>
    </table>
  );
};

export default Table;
