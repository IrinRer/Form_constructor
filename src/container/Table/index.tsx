import React from 'react';
import TableBody from './Body';
import styles from './index.module.scss';

const Table = () => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Название Документа</th>
          <th>Количество</th>
        </tr>
      </thead>
      <tbody>
        <TableBody />
      </tbody>
    </table>
  );
};

export default Table;
