import React from 'react';
import styles from './index.module.scss';

interface IProps {
  text: string;
}

const Error: React.FC<IProps> = ({ text }) => {
  return (
    <div className={styles.wrapper}>
      <p>{text}</p>
    </div>
  );
};

export default Error;