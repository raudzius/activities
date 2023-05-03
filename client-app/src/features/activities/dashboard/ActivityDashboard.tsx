import React from 'react';
import ActivityList from './ActivityList';

type Props = {
  activities: Activity[];
};

const ActivityDashboard: React.FC<Props> = ({ activities }) => (
  <ActivityList activities={activities} />
);

export default ActivityDashboard;
