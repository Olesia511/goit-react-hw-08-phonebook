import { Box, Container, CssBaseline } from '@mui/material';
import { LoginForm } from 'components/LoginForm/LoginForm';

export default function LoginPage() {
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Box
          sx={{
            bgcolor: '#ECC424',
            color: '#314448',
            width: '50vh',
            marginTop: '40px',
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: '16px',
            borderRadius: '8px',
          }}
        >
          <LoginForm />
        </Box>
      </Container>
    </>
  );
}
