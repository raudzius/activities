import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Divider,
  Typography,
} from '@mui/material';
import React from 'react';

type Props = {
  activities: Activity[];
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
};

const ActivityList: React.FC<Props> = ({ activities, selectActivity, deleteActivity }) => (
  <Box>
    {activities.map(({
      id, title, date, description, city, venue, category,
    }) => (
      <Box key={id}>
        <Card sx={{ pb: 1, pr: 1 }}>
          <CardContent sx={{ pb: 0 }}>
            <Typography variant="h6" component="div">
              {title}
            </Typography>
            <Typography gutterBottom variant="subtitle2" color="text.secondary">
              {date}
            </Typography>
            <Typography variant="body1">{description}</Typography>
            <Typography variant="body2">{`${city}, ${venue}`}</Typography>
            <Chip label={category} variant="outlined" sx={{ mt: 1 }} />
          </CardContent>
          <CardActions sx={{ float: 'right' }}>
            <Button
              variant="contained"
              size="medium"
              color="error"
              sx={{ px: 3 }}
              onClick={() => deleteActivity(id)}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              size="medium"
              sx={{ px: 3 }}
              onClick={() => selectActivity(id)}
            >
              View
            </Button>
          </CardActions>
        </Card>
        <Divider />
      </Box>
    ))}
  </Box>
);

export default ActivityList;
