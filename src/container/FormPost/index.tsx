import ButtonContainer from 'container/AuthContainer/Form/BtnContainer';
import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import { useAppSelector } from 'hooks/redux/useAppSelector';
import React, { useEffect } from 'react';
import {
  getDocument,
  getName,
  getNames,
  isNotUnique,
} from 'store/data/selectors';
import { clearNameDocument, setDocument, setName } from 'store/data/slice';
import {
  dataFetchAction,
  dataPostAction,
  namesFetchAction,
} from 'store/data/thunk';
import styles from './index.module.scss';

const FormPost = () => {
  const names = useAppSelector(getNames);
  const dispatch = useAppDispatch();
  const name = useAppSelector(getName);
  const document = useAppSelector(getDocument);
  const isNotUniqueValue = useAppSelector(isNotUnique);

  useEffect(() => {
    dispatch(namesFetchAction());
    dispatch(dataFetchAction());
  }, [dispatch]);

  const handleSubmit = () => {
    if (name && document && isNotUniqueValue.length === 0) {
      dispatch(dataPostAction({ name, document }));
      dispatch(clearNameDocument());
    }
  };

  const handleSelect = (e) => {
    dispatch(setName(e.target.value));
  };

  const handleChange = (e) => {
    dispatch(setDocument(e.target.value));
  };

  return (
    <form className={styles.form}>
      <label>Выберите имя</label>
      <select onChange={handleSelect}>
        {names.map((item: string) => (
          <option value={item} className={styles.option} key={item}>
            {item}
          </option>
        ))}
      </select>
      <input
        type="text"
        onChange={handleChange}
        className={styles.input}
        value={document}
      />
      {isNotUniqueValue.length !== 0 ? (
        <p className={styles.p_error}>
          Вы уже отправляли заявку на этот документ, она уже была учтена
        </p>
      ) : null}
      <ButtonContainer action={handleSubmit} text="Готово" />
    </form>
  );
};

export default FormPost;
