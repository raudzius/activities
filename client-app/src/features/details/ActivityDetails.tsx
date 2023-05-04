import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  ButtonGroup,
  Divider,
} from '@mui/material';
import React from 'react';

type Props = {
  activity: Activity | null;
  cancelSelectActivity: () => void;
  openForm: (id: string) => void;
};

const ActivityDetails: React.FC<Props> = ({
  activity,
  cancelSelectActivity,
  openForm,
}) => activity && (
<Card>
  <CardMedia
    sx={{ height: 140 }}
    image={`/assets/categoryImages/${activity.category}.jpg`}
    title="green iguana"
  />
  <CardContent>
    <Typography variant="h6" component="div">
      {activity.title}
    </Typography>
    <Typography gutterBottom variant="subtitle2" color="text.secondary">
      {activity.date}
    </Typography>
    <Typography variant="body1">{activity.description}</Typography>
  </CardContent>
  <Divider />
  <CardActions>
    <ButtonGroup fullWidth>
      <Button onClick={() => openForm(activity.id)}>Edit</Button>
      <Button color="error" onClick={cancelSelectActivity}>
        Cancel
      </Button>
    </ButtonGroup>
  </CardActions>
</Card>
);

export default ActivityDetails;
