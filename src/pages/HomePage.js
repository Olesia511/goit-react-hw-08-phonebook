import { useAuth } from '../hooks/useAuth';

import { Box, Container, CssBaseline } from '@mui/material';

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
              borderRadius: '8px',
            }}
          >
            {isLoggedIn && (
              <h2
                style={{
                  textAlign: 'center',
                  paddingTop: '20px',
                  paddingBottom: '20px',
                }}
              >
                Welcome, {user.name.toUpperCase()}.
              </h2>
            )}
            {!isLoggedIn && (
              <h2
                style={{
                  textAlign: 'center',
                  paddingTop: '20px',
                  paddingBottom: '20px',
                }}
              >
                Wellcome to Phonebook! Please login or register.
              </h2>
            )}
          </Box>
        </Container>
      </>
    </>
  );
}
