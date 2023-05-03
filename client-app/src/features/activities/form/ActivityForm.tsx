import {
  Box, Button, Paper, TextField,
} from '@mui/material';
import React from 'react';

const ActivityForm: React.FC = () => (
  <Paper sx={{ padding: 2, mt: 3 }}>
    <Box component="form" noValidate>
      <TextField margin="dense" required fullWidth id="title" label="Title" name="title" />
      <TextField
        margin="dense"
        required
        fullWidth
        id="description"
        label="Description"
        name="description"
        multiline
        minRows={2}
      />
      <TextField
        margin="dense"
        required
        fullWidth
        id="category"
        label="Category"
        name="category"
      />
      <TextField margin="dense" required fullWidth id="date" label="Date" name="date" />
      <TextField margin="dense" required fullWidth id="city" label="City" name="city" />
      <TextField margin="dense" required fullWidth id="venue" label="Venue" name="venue" />
      <Box display="flex" justifyContent="end" gap={0.6} sx={{ mt: 1 }}>
        <Button type="button" variant="outlined" color="error" sx={{ float: 'right' }}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="success" sx={{ float: 'right' }}>
          Submit
        </Button>
      </Box>
    </Box>
  </Paper>
);

export default ActivityForm;
