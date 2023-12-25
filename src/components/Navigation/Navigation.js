import { useAuth } from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/" style={{ padding: '12px' }}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" style={{ padding: '12px' }}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
