// import { AccountCircle } from '@mui/icons-material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PasswordIcon from '@mui/icons-material/Password';
import { Box, Button, SvgIcon, TextField } from '@mui/material';
import { useState } from 'react';
import { fetchLoginUsers } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(fetchLoginUsers({ email, password }));

    setPassword('');
    setEmail('');
  };

  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Login Form</h2>
      <form onSubmit={e => handleSubmit(e)}>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '90%' }}>
          <SvgIcon
            sx={{ ml: '16px', mr: '8px', mb: '38px', color: 'action.active' }}
          >
            <AlternateEmailIcon />
          </SvgIcon>
          <TextField
            type="email"
            variant="filled"
            color="secondary"
            label="Email"
            onChange={e => setEmail(e.target.value)}
            value={email}
            fullWidth
            required
            sx={{ mb: 4 }}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '90%' }}>
          <SvgIcon
            sx={{ ml: '16px', mr: '8px', mb: '38px', color: 'action.active' }}
          >
            <PasswordIcon />
          </SvgIcon>
          <TextField
            type="password"
            variant="filled"
            color="secondary"
            label="Password"
            onChange={e => setPassword(e.target.value)}
            value={password}
            required
            fullWidth
            sx={{ mb: 4 }}
          />
        </Box>
        <Button
          variant="outlined"
          color="secondary"
          type="submit"
          sx={{ mb: 2, ml: 2.5 }}
        >
          Login
        </Button>
      </form>
    </>
  );
};
