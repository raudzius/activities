import { Grid } from '@mui/material';
import React from 'react';

type Props = {
  activities: Activity[];
};

const ActivityDashboard: React.FC<Props> = ({ activities }) => (
  <Grid container>
    {activities.map(({ id, title }) => (
      <Grid item key={id} xs={8}>
        {title}
      </Grid>
    ))}
  </Grid>
);

export default ActivityDashboard;
