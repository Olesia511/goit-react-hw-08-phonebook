import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';

export const AuthNav = () => {
  return (
    <div style={{ marginLeft: 'auto' }}>
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
        // onClick={() => dispatch(fetchLogoutUsers())}
      >
        <NavLink to="/register">Register</NavLink>
      </Button>
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
        // onClick={() => dispatch(fetchLogoutUsers())}
      >
        <NavLink to="/login">Login</NavLink>
      </Button>
      {/* <NavLink to="/register">Register</NavLink> */}
      {/* <NavLink to="/login">Log In</NavLink> */}
    </div>
  );
};
