// import { ContactList } from 'components/ContactList/ContactList';

import { Box, Container, CssBaseline } from '@mui/material';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { FilterContacts } from '../components/Filter/Filter';

export const ContactsPage = () => {
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
          <ContactForm />
          <FilterContacts />
          <ContactList />
        </Box>
      </Container>
    </>
  );
};
