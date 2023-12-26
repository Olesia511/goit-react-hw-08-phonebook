import { useDispatch } from 'react-redux';
import { fetchLogoutUsers } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        marginLeft: 'auto',
      }}
    >
      <p
        style={{
          fontSize: '24px',
        }}
      >
        Welcome, {user.name.toUpperCase()}
      </p>
      <AccountCircle sx={{ width: '32px', height: '32px' }} />
      <Button
        variant="contained"
        style={{
          color: '#314448',
          backgroundColor: '#EDC339',
          fontSize: '24px',
          padding: '12px',
          marginLeft: '12px',
          height: '50px',
        }}
        type="button"
        onClick={() => dispatch(fetchLogoutUsers())}
      >
        Logout
      </Button>
    </div>
  );
};
