import {
  AppBar, Button, Toolbar, Typography,
} from '@mui/material';
import React from 'react';

const NavBar: React.FC = () => (
  <AppBar position="static">
    <Toolbar sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
      <Typography variant="h6">Reactivities</Typography>
      <Typography variant="button">Activities</Typography>
      <Button variant="contained" color="success">
        Create Activity
      </Button>
    </Toolbar>
  </AppBar>
);

export default NavBar;
