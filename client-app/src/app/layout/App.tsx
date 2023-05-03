import {
  Container, CssBaseline, ThemeProvider, createTheme,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

const App: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const theme = createTheme({
    palette: {
      background: {
        default: '#eaeaea',
      },
    },
  });

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities').then((response) => {
      setActivities(response.data);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Container sx={{ mt: 6 }}>
        <ActivityDashboard activities={activities} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
