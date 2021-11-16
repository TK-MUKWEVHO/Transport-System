import React, {useState} from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import {reserveTrip} from '../../actions/studentTrip';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const BookTrip = () =>{
  const [tripData,setTripData]= useState({firstNane:'', lastname:'',studentNumber:'',Time: new Date(),From: '',Destination: ''});
  const dispatch =useDispatch();
  const [age, setAge] = useState('');

  const handleSubmit=(e)=>{
      e.preventDefault();

      dispatch(reserveTrip(tripData));
  }
    return (
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography align="center" variant="h6" gutterBottom>
        Book Trip
        </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            variant="standard"
            value={tripData.firstName}
            onChange={(e)=>setTripData({...tripData, firstName:e.target.value})}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            variant="standard"
            value={tripData.lastName}
            onChange={(e)=>setTripData({...tripData, lastName:e.target.value})}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="StudentNumber"
            name="StudentNumber"
            label="Student Number"
            fullWidth
            variant="standard"
            value={tripData.studentNumber}
            onChange={(e)=>setTripData({...tripData, studentNumber:e.target.value})}
          />
        </Grid>
        <Grid item xs={12}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="Time">Choose Time</InputLabel>
        <Select
        required
          labelId="Time"
          id="Time"
          fullWidth
          value={tripData.Time}
          onChange={(e)=>setTripData({...tripData, Time:e.target.value})}
          label="Time"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="From">From</InputLabel>
        <Select
        required
          labelId="From"
          id="From"
          fullWidth
          value={tripData.Destination}
          onChange={(e)=>setTripData({...tripData, From:e.target.value})}
          label="From"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
         
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="Deistinaton">Destination</InputLabel>
        <Select
        required
          labelId="Destination"
          id="Destionation"
          fullWidth
          value={tripData.Destination}
          onChange={(e)=>setTripData({...tripData, Destination:e.target.value})}
          label="Destination"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
        </Grid>
        <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{mx:2, mt: 3, mb: 2,color: 'success' }}
            >
              Book Trip
            </Button>
      </Grid>
      </form>
      </Paper>     
      </Container>
    );
}

export default BookTrip;
