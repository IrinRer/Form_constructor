import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import React, { useEffect } from 'react';
import { authorizationAction } from 'store/auth/thunk';
import Form from './Form';

const AuthContainer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authorizationAction());
  }, [dispatch]);

  return <Form />;
};

export default AuthContainer;
