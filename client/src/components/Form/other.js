import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function ConfirmTrip() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Student Temparature
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            
            id="studentName"
            label="Student Name"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            
            id="studentNumber"
            label="Student Number"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            
            id="time"
            label="Departure Time"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            
            id="busregistration"
            label="Bus Registration"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            
            id="Expiry Time"
            label="Expiry Time"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="Temp"
            label="Temperature"
            helperText="Temperature taken by bus official"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}