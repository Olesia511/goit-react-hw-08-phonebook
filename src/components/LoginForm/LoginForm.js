import { useState } from 'react';
import { fetchLoginUsers } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PasswordIcon from '@mui/icons-material/Password';
import { Box, Button, SvgIcon, TextField } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blueGrey[500]),
  backgroundColor: blueGrey[700],
  '&:hover': { backgroundColor: blueGrey[900] },
}));

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
          <SvgIcon sx={{ ml: '16px', mr: '8px', mb: '38px', color: '#314448' }}>
            <AlternateEmailIcon />
          </SvgIcon>
          <TextField
            type="email"
            variant="standard"
            label="Email"
            onChange={e => setEmail(e.target.value)}
            value={email}
            fullWidth
            required
            sx={{ mb: 4, color: '#314448' }}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '90%' }}>
          <SvgIcon sx={{ ml: '16px', mr: '8px', mb: '38px', color: '#314448' }}>
            <PasswordIcon />
          </SvgIcon>
          <TextField
            type="password"
            variant="standard"
            label="Password"
            onChange={e => setPassword(e.target.value)}
            value={password}
            required
            fullWidth
            sx={{ mb: 4, color: '#314448' }}
          />
        </Box>
        <Box sx={{ mb: 2, ml: 2.5, bgcolor: 'primary' }}>
          <ColorButton
            variant="contained"
            type="submit"
            sx={{
              mb: 2,
              ml: 2.5,
              bgcolor: '#314448',
              color: '#ECC424',
              fontWeight: '600',
            }}
          >
            Log in
          </ColorButton>
        </Box>
      </form>
    </>
  );
};
