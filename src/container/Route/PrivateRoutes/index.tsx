import AuthContainer from 'container/AuthContainer';
import { useAuth } from 'hooks/useAuth';
import React, { ReactElement } from 'react';

interface IRouteProps {
  children: ReactElement;
}

const PrivateRoute: React.FC<IRouteProps> = ({ children: Component }) => {
  const { isAuth } = useAuth();

  return <>{isAuth ? Component : <AuthContainer />}</>;
};

export default PrivateRoute;
