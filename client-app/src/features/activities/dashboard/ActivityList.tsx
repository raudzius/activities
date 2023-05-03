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
};

const ActivityList: React.FC<Props> = ({ activities }) => (
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
            <Button variant="contained" size="medium" sx={{ px: 3 }}>
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