import { Box, Button, Container, CssBaseline } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blueGrey[500]),
  backgroundColor: blueGrey[700],
  '&:hover': { backgroundColor: blueGrey[900] },
}));

export default function NotFoundPage() {
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
          <h3 style={{ textAlign: 'center' }}>Sorry, no such page exists.</h3>
          <ColorButton
            variant="contained"
            type="submit"
            sx={{
              bgcolor: '#314448',
              color: '#ECC424',
              fontWeight: '600',
            }}
          >
            <NavLink
              style={{
                color: 'inherit',
                padding: '12px',
                textDecoration: 'none',
                fontSize: '16px ',
                fontWeight: '600',
                textAlign: 'center',
                display: 'block',
                width: '100%',
                fontStyle: 'italic',
              }}
              to="/"
            >
              You can go to the main page.
            </NavLink>
          </ColorButton>
        </Box>
      </Container>
    </>
  );
}
