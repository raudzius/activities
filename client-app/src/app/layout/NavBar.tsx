import {
  AppBar, Box, Button, Container, Toolbar, Typography,
} from '@mui/material';
import React from 'react';
import { Image } from 'mui-image';

type Props = {
  openForm: () => void;
};

const NavBar: React.FC<Props> = ({ openForm }) => (
  <AppBar
    position="static"
    sx={{
      backgroundImage:
        'linear-gradient(135deg,rgb(24,42,115) 0%,rgb(33,138,174) 69%, rgb(32,167,172) 89%)',
    }}
  >
    <Container>
      <Toolbar sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
        <Box display="flex" alignItems="center" gap={1}>
          <Image src="/assets/logo.png" alt="logo" width={35} duration={0} />
          <Typography variant="h6">Reactivities</Typography>
        </Box>
        <Typography variant="button">Activities</Typography>
        <Button variant="contained" color="success" onClick={openForm}>
          Create Activity
        </Button>
      </Toolbar>
    </Container>
  </AppBar>
);

export default NavBar;
