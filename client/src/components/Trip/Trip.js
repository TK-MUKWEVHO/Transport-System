import React, { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper,TextField, Grid, Typography, Container } from '@material-ui/core';
import { useNavigate,useLocation } from 'react-router-dom';

import useStyles from './styles';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import decode from 'jwt-decode';
import {reserveTrip} from '../../actions/trip';

const Trip = () => {
  const [user,setUser]= useState(JSON.parse(localStorage.getItem('profile')));

   const [form,setForm]=useState({name: user?.result.name,studentNumber: user?.result.studentNumber,fromTo: '',time: ''});

  const dispatch = useDispatch();
  const history = useNavigate();
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    dispatch(reserveTrip(form,history));
    
  };
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const campus=[
    {name: "Main Campus To Arcadia Campus"},
    {name: "Arcadia Campus To Main Campus"},
    {name: "Sosha South To Arcadia Campus"},
    {name: "South North To Arcadia Campus"},
    {name: "Acadia Campus To Sosha South"},
    {name: "Acadia Campus To Sosha North"},
    {name: "Sosha South To Main Campus"},
    {name: "South North To Main Campus"}];

    const timeSlots = Array.from(new Array(24 * 2)).map(
        (_, index) =>
          `${index < 20 ? '0' : ''}${Math.floor(index / 2)}:${
            index % 2 === 0 ? '00' : '30'
          }`,
      );
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={6}>
        <Typography component="h1" variant="h5">Book Trip</Typography>
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
                  value={user?.result.name}
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
                  value={user?.result.studentNumber}
                />
            </Grid>
              <Grid item xs={12}>
              <Stack spacing={3}>
                <Autocomplete
                    id="tags"
                    options={campus}
                    getOptionLabel={(option) => option.name}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        id="fromTo"
                        name="fromTo"
                        variant="outlined"
                        label="Select From and Destination"
                        placeholder="Choose Campus"
                        handleChange={handleChange}
                      />
                    )}
                 />
                </Stack>
                </Grid>
                <Grid item xs={12}>
                <Autocomplete
                    id="disabled-options-demo"
                    options={timeSlots}
                    getOptionDisabled={(option) =>
                        option === timeSlots[0] || option === timeSlots[2]
                    }
                    renderInput={(params) => 
                    <TextField 
                    {...params} 
                    variant="outlined" 
                    label="Choose Time" 
                    id="time" 
                    name="time" 
                    handleChange={handleChange} 
                    />}
                />
              </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Book Trip
          </Button>
        </form>
      </Paper>
    </Container>
  );
};
export default Trip;