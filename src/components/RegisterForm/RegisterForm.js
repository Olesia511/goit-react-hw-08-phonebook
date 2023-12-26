import { AccountCircle } from '@mui/icons-material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PasswordIcon from '@mui/icons-material/Password';
import { Box, Button, SvgIcon, TextField } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
// import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { blueGrey } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import { fetchRegisterUsers } from '../../redux/auth/operations';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#314448',
//       light: '#7D4E25',
//     },
//     secondary: {
//       main: '#ECC424',
//     },
//   },
// });
// bgcolor: '#ECC424',
// color: '#314448',
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blueGrey[500]),
  backgroundColor: blueGrey[700],
  '&:hover': {
    backgroundColor: blueGrey[900],
  },
}));

export const RegisterForm = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(fetchRegisterUsers({ name: userName, email, password }));

    setUserName('');
    setPassword('');
    setEmail('');
  };

  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <h2 style={{ textAlign: 'center' }}>Register Form</h2>
      <form onSubmit={e => handleSubmit(e)}>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '90%' }}>
          <SvgIcon sx={{ ml: '16px', mr: '8px', mb: '38px', color: '#314448' }}>
            <AccountCircle />
          </SvgIcon>
          <TextField
            type="text"
            label="Name"
            variant="standard"
            onChange={e => setUserName(e.target.value)}
            value={userName}
            // color="primary"
            fullWidth
            required
            sx={{ mb: 4, color: '#314448' }}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '90%' }}>
          <SvgIcon sx={{ ml: '16px', mr: '8px', mb: '38px', color: '#314448' }}>
            <AlternateEmailIcon />
          </SvgIcon>
          <TextField
            type="email"
            variant="standard"
            // color="primary"
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
            // color="primary"
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
            // color="secondary"
            type="submit"
            sx={{
              mb: 2,
              ml: 2.5,
              bgcolor: '#314448',
              color: '#ECC424',
              fontWeight: '600',
            }}
          >
            Register
          </ColorButton>
        </Box>
      </form>
      <Box
        sx={{
          mb: 2,
          ml: 2.5,
        }}
      >
        <small>
          Already have an account?
          <NavLink
            style={{
              color: '#314448',
              padding: '12px',
              textDecoration: 'none',
              fontSize: '16px ',
              fontWeight: '600',
            }}
            to="/login"
          >
            Login here
          </NavLink>
        </small>
      </Box>
      {/* </ThemeProvider> */}
    </>
  );
};
