import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import React, { useEffect } from 'react';
import { dataFetchAction } from 'store/data/thunk';

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(dataFetchAction());
  }, [dispatch]);

  return <p>home</p>;
};

export default Home;
