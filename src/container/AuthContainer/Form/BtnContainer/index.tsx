import React from 'react';
import styles from './index.module.scss';

interface IProps {
  action: (arg1?: string, arg2?: string) => void;
  text?: string;
}

const ButtonContainer: React.FC<IProps> = ({ action, text }) => {
  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    action();
  };
  return (
    <button type="submit" onClick={handleSubmit} className={styles.btn}>
      {text}
    </button>
  );
};

export default ButtonContainer;
