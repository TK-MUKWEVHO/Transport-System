import React, { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Button, Paper,TextField, Grid, Typography, Container } from '@material-ui/core';
import { useNavigate,useLocation } from 'react-router-dom';
import useStyles from './styles';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import {reserveTrip} from '../../actions/trip';
import ConfirmTrip from '../ConfirmTrip/ConfirmTrip';

const Trip = () => {

  const [user,setUser]= useState(JSON.parse(localStorage.getItem('profile')));
  const [form,setForm]=useState({name: user?.result.name,studentNumber: user?.result.studentNumber,tripFromTo: '',time:'' });
  const dispatch = useDispatch();
  const history = useNavigate();
  const classes = useStyles();
  const location = useLocation();

  const trips=useSelector((state)=>state.trip);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(reserveTrip(form,history));
  };

  const onSubmit=(e)=>{
    e.preventDefault();
  };
  console.log(trips);
  //const studentTrip=trips.find((trip)=>trip.studentNumber===user?.result.studentNumber);

  const campus=[
    {name: "Main Campus To Arcadia Campus"},
    {name: "Arcadia Campus To Main Campus"},
    {name: "Sosha South To Arcadia Campus"},
    {name: "South North To Arcadia Campus"},
    {name: "Acadia Campus To Sosha South"},
    {name: "Acadia Campus To Sosha North"},
    {name: "Sosha South To Main Campus"},
    {name: "South North To Main Campus"},
    {name: "Main Campus To Sosha South"},
    {name: "Main Campus To Sosha North"}];

    const timeSlots = Array.from(new Array(22 * 2)).map(
        (_, index) =>
          `${index < 20 ? '' : ''}${Math.floor(index / 2)}:${
            index % 2 === 0 ? '00' : '30'
          }`,
      );
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={6}>
        <Typography component="h1" variant="h5">{ trips.lenght >0 ? 'Book Trip' : 'Confirm Trip' }</Typography>
        { studentTrip ? (
            <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField disable variant="outlined" fullWidth id="name" label="First and Last Name" name="name" value={user?.result.name}/>
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
                      id="tripFromTo"
                      getOptionSelected = {(option, value) => option.name === value.value}
                      onChange={(event,option)=>{setForm({...form,tripFromTo:option.name})}}
                      options={campus}
                      getOptionLabel={(option) => option.name}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          id="tripFromTo"
                          name="tripFromTo"
                          variant="outlined"
                          label="Select From and Destination"
                          placeholder="Choose Campus"
                          
                        />
                      )}
                   />
                  </Stack>
                  </Grid>
                  <Grid item xs={12}>
                  <Autocomplete
                      id="disabled-options-demo"
                      onChange={(event,option)=>{
                        
                        setForm({...form,time:option});
                      
                    }}
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
                      />}
                  />
                </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              Book Trip
            </Button>
          </form>
        ) : (
          <form className={classes.form} onSubmit={onSubmit}>
          <Grid container spacing={2}>
          <Grid item xs={12}>
                <TextField
                  disabled
                  variant="outlined"
                  fullWidth
                  id="name"
                  label="First and Last Name"
                  name="name"
                  value={trips.name}  
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
                  value={trips.studentNumber}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                  disabled
                  variant="outlined"
                  fullWidth
                  id="fromTo"
                  label="From and Destination"
                  value={trips.fromTo}
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
                  value={trips.time}
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
                  value={form.temperature}
                  onChange={(e)=>setForm({...form, temperature:e.target.value})}
                />
              </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Confirm Trip
          </Button>
        </form>
        ) } 
      </Paper>
    </Container>
  );
};
export default Trip;