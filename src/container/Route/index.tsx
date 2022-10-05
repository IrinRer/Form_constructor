import React, { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Error from 'component/Common/Error';
import Header from 'container/Header';
import Loader from 'component/Common/Loader';
import AuthPage from 'pages/Auth';
import { useAuth } from 'hooks/useAuth';
import ErrorBoundary from 'component/Common/ErrorBoundary';
import { ROUTES } from 'constants/route';
import PrivateRoute from './PrivateRoutes';

const CreateRoutes: React.FC = () => {
  const { isAuth } = useAuth();

  const FormPostPage = lazy(() => import('pages/FormPostPage'));
  const TablePage = lazy(() => import('pages/TablePage'));

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </BrowserRouter>
  );
};

export default CreateRoutes;
