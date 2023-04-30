import { Diversity3 } from '@mui/icons-material';
import {
  Box, List, ListItem, Typography,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then((response) => {
      setActivities(response.data);
    });
  }, []);

  return (
    <Box>
      <Box display="flex" alignItems="center">
        <Diversity3 fontSize="large" />
        <Typography component="h1" variant="h5" sx={{ fontWeight: '700' }} ml={1}>
          Activities
        </Typography>
      </Box>
      <List>
        {activities.map(({ id, title }: any) => (
          <ListItem key={id}>{title}</ListItem>
        ))}
      </List>
    </Box>
  );
};

export default App;
