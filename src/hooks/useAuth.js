import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsRefresh,
  selectIsLoggedIn,
} from '../redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefresh = useSelector(selectIsRefresh);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefresh,
    user,
  };
};
