import { useDispatch } from 'react-redux';
import { fetchLogoutUsers } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(fetchLogoutUsers())}>
        Logout
      </button>
    </div>
  );
};
