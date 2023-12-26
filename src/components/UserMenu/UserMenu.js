import { useDispatch } from 'react-redux';
import { fetchLogoutUsers } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const ToggleBtn = styled(Button)(() => ({
  color: '#314448',
  backgroundColor: '#EDC339',
  '&:hover': {
    backgroundColor: '#A29415',
  },
}));

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
        {user.name.toUpperCase()}
      </p>
      <AccountCircle sx={{ width: '32px', height: '32px' }} />
      <ToggleBtn
        variant="contained"
        style={{
          fontSize: '24px',
          padding: '12px',
          marginLeft: '12px',
          height: '50px',
        }}
        type="button"
        onClick={() => dispatch(fetchLogoutUsers())}
      >
        Logout
      </ToggleBtn>
    </div>
  );
};
