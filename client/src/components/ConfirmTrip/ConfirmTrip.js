import React, {useState} from 'react';
import { Button, Paper,TextField, Grid, Typography, Container } from '@material-ui/core';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import {getTrip} from '../../actions/trip';

const ConfirmTrip = () => {
    const dispatch = useDispatch();
     const history = useNavigate();
    const classes = useStyles();

    const [form,setForm]=useState({temperature: ''});

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getTrip(form,history));
      };
    return (
        <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={6}>
        <Typography component="h1" variant="h5">Confirm Trip</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
          <Grid item xs={12}>
                <TextField
                  disabled
                  variant="outlined"
                  fullWidth
                  id="name"
                  label="First and Last Name"
                  name="name"  
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                  disabled
                  variant="outlined"
                  fullWidth
                  id="studentNumber"
                  label="Student Number"
                  name="studentNumber"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                  disabled
                  variant="outlined"
                  fullWidth
                  id="fromTo"
                  label="From and Destination"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                  disabled
                  name="firstName"
                  fullWidth
                  id="firstName"
                  label="Time"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="temperature"
                  label="Temperature"
                  name="temperature"
                  variant="outlined"
                />
              </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Confirm Trip
          </Button>
        </form>
      </Paper>
    </Container>
    )
}
export default ConfirmTrip
