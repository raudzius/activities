import React from 'react';
import { Grid } from '@mui/material';
import ActivityList from './ActivityList';
import ActivityDetails from '../../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';

type Props = {
  activities: Activity[];
  selectedActivity: Activity | null;
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
};

const ActivityDashboard: React.FC<Props> = ({
  activities,
  selectedActivity,
  selectActivity,
  cancelSelectActivity,
}) => (
  <Grid container spacing={4}>
    <Grid item xs={7.5}>
      <ActivityList activities={activities} selectActivity={selectActivity} />
    </Grid>
    <Grid item xs={4.5}>
      {activities[0] && (
        <ActivityDetails activity={selectedActivity} cancelSelectActivity={cancelSelectActivity} />
      )}
      <ActivityForm />
    </Grid>
  </Grid>
);

export default ActivityDashboard;
