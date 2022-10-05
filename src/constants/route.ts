type TRouteNames = 'auth' | 'form' | 'table' | 'notFound';

interface IRoute {
  path: string;
  route: string;
  name: string;
}

export const ROUTES: Record<TRouteNames, IRoute> = {
  form: {
    path: '/',
    route: '/',
    name: 'Форма для заявки',
  },

  table: {
    path: '/table',
    route: '/table',
    name: 'Сводная таблица',
  },

  auth: {
    path: '/auth',
    route: '/auth',
    name: 'Authorization',
  },
  notFound: {
    path: '*',
    route: '*',
    name: '404',
  },
};
