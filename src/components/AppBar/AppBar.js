import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export const AppBarHeader = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Box>
        <AppBar
          position="static"
          sx={{
            bgcolor: '#314448',
            color: '#ECC424',
          }}
        >
          <Toolbar>
            <Navigation />

            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
};
