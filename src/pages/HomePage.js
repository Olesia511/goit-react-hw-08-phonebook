// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// // import MenuIcon from '@mui/icons-material/Menu';
// import { phone_back } from '/public/img/phone_back.jpg';

import { Box, Container, CssBaseline } from '@mui/material';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from '../hooks/useAuth';

export default function HomePage() {
  const { isLoggedIn, user } = useAuth();
  return (
    <>
      <>
        <CssBaseline />
        <Container fixed>
          <Box
            sx={{
              bgcolor: '#ECC424',
              color: '#314448',
              width: '50vh',
              height: '20vh',
              marginTop: '40px',
              marginLeft: 'auto',
              marginRight: 'auto',
              // padding: '16px',
              borderRadius: '8px',
            }}
          >
            {isLoggedIn && (
              <h2 style={{ textAlign: 'center', paddingTop: '50px' }}>
                Welcome, {user.name.toUpperCase()}.
              </h2>
            )}
            {!isLoggedIn && (
              <h2 style={{ textAlign: 'center', paddingTop: '50px' }}>
                Please login or register.
              </h2>
            )}
          </Box>
        </Container>
      </>
    </>
  );
}
