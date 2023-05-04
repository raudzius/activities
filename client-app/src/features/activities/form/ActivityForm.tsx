import {
  Box, Button, Paper, TextField,
} from '@mui/material';
import React, { ChangeEventHandler, useState } from 'react';

type Props = {
  activity: Activity | null;
  closeForm: () => void;
};

const ActivityForm: React.FC<Props> = ({ activity: selectedActivity, closeForm }) => {
  const initialState = selectedActivity ?? {
    id: '',
    title: '',
    category: '',
    description: '',
    date: '',
    city: '',
    venue: '',
  };

  const [activity, setActivity] = useState(initialState);

  const handleSubmit = () => {
    console.log(activity);
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  };

  return (
    <Paper sx={{ padding: 2, mt: 3 }}>
      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          margin="dense"
          required
          fullWidth
          id="title"
          label="Title"
          name="title"
          value={activity.title}
          onChange={handleInputChange}
        />
        <TextField
          margin="dense"
          required
          fullWidth
          id="description"
          label="Description"
          name="description"
          multiline
          minRows={2}
          value={activity.description}
          onChange={handleInputChange}
        />
        <TextField
          margin="dense"
          required
          fullWidth
          id="category"
          label="Category"
          name="category"
          value={activity.category}
          onChange={handleInputChange}
        />
        <TextField
          margin="dense"
          required
          fullWidth
          id="date"
          label="Date"
          name="date"
          value={activity.date}
          onChange={handleInputChange}
        />
        <TextField
          margin="dense"
          required
          fullWidth
          id="city"
          label="City"
          name="city"
          value={activity.city}
          onChange={handleInputChange}
        />
        <TextField
          margin="dense"
          required
          fullWidth
          id="venue"
          label="Venue"
          name="venue"
          value={activity.venue}
          onChange={handleInputChange}
        />
        <Box display="flex" justifyContent="end" gap={0.6} sx={{ mt: 1 }}>
          <Button
            type="button"
            variant="outlined"
            color="error"
            sx={{ float: 'right' }}
            onClick={closeForm}
          >
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="success" sx={{ float: 'right' }}>
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default ActivityForm;
