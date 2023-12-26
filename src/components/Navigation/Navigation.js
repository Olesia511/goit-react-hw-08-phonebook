// import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';
import { Box, ListItem, ListItemButton, Typography } from '@mui/material';
import {
  createTheme,
  ThemeProvider,
  useTheme,
  styled,
} from '@mui/material/styles';
// import { ListItemContent, ListItemDecorator } from '@mui/joy';
import { amber, yellow, blueGrey } from '@mui/material/colors';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { withTheme } from 'styled-components';

// const themeBtn = createTheme({
//   palette: {
//     primary: {
//       main: '#806491',
//     },
//     secondary: {
//       main: '#ECC424',
//     },
//   },
// });
const themeBtn = createTheme({
  palette: {
    ochre: {
      main: '#EDC339',
      light: '#FEE3A2',
      dark: '#A29415',
      contrastText: '#314448',
    },
  },
});
const ToggleBtn = styled(ToggleButton)(() => ({
  color: '#314448',
  backgroundColor: '#EDC339',
  '&:hover': {
    backgroundColor: '#A29415',
  },
}));

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  // const [alignment, setAlignment] = useState('contacts');
  const { ochre } = themeBtn.palette;
  const [bgCol, setBgCol] = useState('ochre');
  // console.log(`themeBtn ochre`, ochre);
  // console.log(`themeBtn secondary`, secondary);

  const handleAlignment = event => {
    const evt = event.target;
    const btn = evt.closest('button').value;
    const activeBtn = evt.classList.contains('active');
    // .classList.contains("active")
    // setAlignment(event);
    // if (activeBtn) {
    //   console.log(`activeBtn`, activeBtn);
    //   setBgCol('#FEE3A2');
    // }
    // console.log(`event`, btn);

    // // setBgCol('ochre.light');
    // setBgCol('#A29415');
  };

  return (
    <nav>
      <ThemeProvider theme={themeBtn}>
        <ToggleButtonGroup
          // color="ochre"
          // bgcolor={bgCol}
          // value={alignment}
          exclusive
          // onChange={e => handleAlignment(e)}
          aria-label="home"
          // sx={{ bgcolor: 'ochre', color: 'ochre.contrastText' }}
          sx={{ mt: '12px', mb: '12px' }}
        >
          <ToggleBtn
            value="home"
            aria-label="home"
            sx={{
              mr: '12px',

              pr: '16px',
              pl: '16px',
              pt: '4px',
              pb: '4px',
              height: '50px',
            }}
          >
            <NavLink
              to="/"
              style={{
                fontSize: '24px',
                // padding: '8px',
                // color: 'ochre.light',
              }}
            >
              Home
            </NavLink>
          </ToggleBtn>

          {isLoggedIn && (
            <ToggleBtn
              value="contacts"
              aria-label="contacts"
              sx={{
                mr: '12px',
                pr: '16px',
                pl: '16px',
                pt: '4px',
                pb: '4px',
                height: '50px',
              }}
            >
              <NavLink
                to="/contacts"
                style={{ fontSize: '24px', padding: '8px' }}
              >
                Contacts
              </NavLink>
            </ToggleBtn>
          )}
        </ToggleButtonGroup>
      </ThemeProvider>
    </nav>
  );
};
