import {
  Container, CssBaseline, ThemeProvider, createTheme,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

const App: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [editMode, setEditMode] = useState(false);
  const theme = createTheme({
    palette: {
      background: {
        default: '#eaeaea',
      },
    },
  });

  const handleSelectActivity = (id: string) => {
    const identifiedActivity = activities.find((activity) => activity.id === id) || null;
    setSelectedActivity(identifiedActivity);
  };

  const handleCancelSelectActivity = () => {
    setSelectedActivity(null);
  };

  const handleFormOpen = (id?: string) => {
    if (id) handleSelectActivity(id);
    if (!id) handleCancelSelectActivity();
    setEditMode(true);
  };

  const handleFormClose = () => {
    setEditMode(false);
  };

  const handleCreateOrEditActivity = (activity: Activity) => {
    if (activity.id) {
      setActivities([...activities.filter((x) => x.id !== activity.id), activity]);
    } else {
      setActivities([...activities, { ...activity, id: uuid() }]);
    }
    setEditMode(false);
    setSelectedActivity(activity);
  };

  const handleDeleteActivity = (id: string) => {
    setActivities([...activities.filter((activity) => activity.id !== id)]);
  };

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities').then((response) => {
      setActivities(response.data);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar openForm={handleFormOpen} />
      <Container sx={{ mt: 6 }}>
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditActivity}
          deleteActivity={handleDeleteActivity}
        />
      </Container>
    </ThemeProvider>
  );
};

export default App;
