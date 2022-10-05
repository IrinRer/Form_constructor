type TRouteNames = 'auth' | 'home' | 'notFound';

interface IRoute {
  path: string;
  route: string;
  name: string;
}

export const ROUTES: Record<TRouteNames, IRoute> = {
  home: {
    path: '/',
    route: '/',
    name: 'Home',
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