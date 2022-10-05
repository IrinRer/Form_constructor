import CreateRoutes from 'container/Route';
import { useAppDispatch } from 'hooks/redux/useAppDispatch';
import React, { useEffect } from 'react';
import { dataFetchAction, namesFetchAction } from 'store/data/thunk';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(namesFetchAction());
    dispatch(dataFetchAction());
  }, [dispatch]);

  return <CreateRoutes />;
};

export default App;
