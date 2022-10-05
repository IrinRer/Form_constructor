import { getLogin, getPassword, getAuth } from 'store/auth/selectors';
import { useAppSelector } from './redux/useAppSelector';

interface IHookUseAuth {
  isAuth: boolean;
  login?: string;
  password?: string;
}

export const useAuth = (): IHookUseAuth => {
  const login = useAppSelector(getLogin);
  const password = useAppSelector(getPassword);
  const auth = useAppSelector(getAuth);

  return {
    isAuth: auth === 'yes',
    login,
    password,
  };
};