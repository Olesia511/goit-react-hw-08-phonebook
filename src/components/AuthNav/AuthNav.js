import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const ToggleBtn = styled(Button)(() => ({
  color: '#314448',
  backgroundColor: '#EDC339',
  '&:hover': {
    backgroundColor: '#A29415',
  },
}));

export const AuthNav = () => {
  return (
    <div style={{ marginLeft: 'auto' }}>
      <ToggleBtn
        value="register"
        aria-label="register"
        variant="contained"
        style={{
          fontSize: '24px',
          padding: '12px',
          marginLeft: '12px',
          height: '50px',
        }}
        type="button"
      >
        <NavLink to="/register">Register</NavLink>
      </ToggleBtn>
      <ToggleBtn
        value="login"
        aria-label="login"
        variant="contained"
        style={{
          fontSize: '24px',
          padding: '12px',
          marginLeft: '12px',
          height: '50px',
        }}
        type="button"
      >
        <NavLink to="/login">Login</NavLink>
      </ToggleBtn>
    </div>
  );
};
