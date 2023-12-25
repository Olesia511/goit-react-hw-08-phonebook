import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Container } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { Box } from '@mui/material';

export default function RegisterPage() {
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
          }}
        >
          <RegisterForm />
        </Box>
      </Container>
    </>
  );
}
