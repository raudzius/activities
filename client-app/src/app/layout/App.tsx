import {
  CssBaseline, List, ListItem,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';

const App: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities').then((response) => {
      setActivities(response.data);
    });
  }, []);

  return (
    <>
      <CssBaseline />
      <NavBar />
      <List>
        {activities.map(({ id, title }) => (
          <ListItem key={id}>{title}</ListItem>
        ))}
      </List>
    </>
  );
};

export default App;
