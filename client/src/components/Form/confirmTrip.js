import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import {useSelector} from 'react-redux';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ConfirmTrip =()=> {

    const studentTrip= useSelector((state)=>state.studentTrip);
    console.log(studentTrip);
    return (
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <Typography align="center" variant="h6" gutterBottom>
                    Confirm Trip
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
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mx:2, mt: 3, mb: 2,color: 'success' }}
                        >
                        Confirm Trip
                        </Button>
                </Grid> 
            </Paper>
        </Container>
    )
}
export default ConfirmTrip;