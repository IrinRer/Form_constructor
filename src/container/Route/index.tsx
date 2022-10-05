import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Error from 'component/Common/Error';
import FormPostPage from 'pages/FormPostPage';
import TablePage from 'pages/TablePage';
import Header from 'container/Header';
import AuthPage from 'pages/Auth';
import { useAuth } from 'hooks/useAuth';
import ErrorBoundary from 'component/Common/ErrorBoundary';
import { ROUTES } from 'constants/route';
import PrivateRoute from './PrivateRoutes';

const CreateRoutes: React.FC = () => {
  const { isAuth } = useAuth();

  return (
    <BrowserRouter>
      <ErrorBoundary>
        {isAuth ? <Header /> : null}
        <Routes>
          <Route
            path={ROUTES.form.path}
            element={
              <PrivateRoute>
                <FormPostPage />
              </PrivateRoute>
            }
          />
          <Route
            path={ROUTES.table.path}
            element={
              <PrivateRoute>
                <TablePage />
              </PrivateRoute>
            }
          />
          <Route path={ROUTES.auth.path} element={<AuthPage />} />
          <Route
            path={ROUTES.notFound.path}
            element={<Error text="Not Found" />}
          />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default CreateRoutes;
