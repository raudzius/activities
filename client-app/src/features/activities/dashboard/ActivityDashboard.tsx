import React from 'react';
import { Grid } from '@mui/material';
import ActivityList from './ActivityList';
import ActivityDetails from '../../details/ActivityDetails';

type Props = {
  activities: Activity[];
};

const ActivityDashboard: React.FC<Props> = ({ activities }) => (
  <Grid container spacing={4}>
    <Grid item xs={7.5}>
      <ActivityList activities={activities} />
    </Grid>
    <Grid item xs={4.5}>
      {activities[0] && <ActivityDetails activity={activities[0]} />}
    </Grid>
  </Grid>
);

export default ActivityDashboard;
