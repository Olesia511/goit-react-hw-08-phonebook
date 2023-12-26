import { NavLink } from 'react-router-dom';
import React from 'react';
import { useAuth } from '../../hooks/useAuth';

import { styled } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const ToggleBtn = styled(ToggleButton)(() => ({
  color: '#314448',
  backgroundColor: '#EDC339',
  '&:hover': {
    backgroundColor: '#A29415',
  },
}));

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <ToggleButtonGroup
        exclusive
        aria-label="home"
        sx={{
          mt: '12px',
          mb: '12px',
        }}
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
    </nav>
  );
};
