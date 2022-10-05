import React from 'react';
import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import { authorization } from 'store/auth/slice';
import styles from './index.module.scss';

const ButtonContainer = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    dispatch(authorization());
  };
  return (
    <button type="submit" onClick={handleSubmit} className={styles.btn}>
      Login in
    </button>
  );
};

export default ButtonContainer;