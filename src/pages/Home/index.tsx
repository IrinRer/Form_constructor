import FormPost from 'container/FormPost';
import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import React, { useEffect } from 'react';
import { namesFetchAction } from 'store/data/thunk';

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(namesFetchAction());
  }, [dispatch]);

  return <FormPost/>;
};

export default Home;
