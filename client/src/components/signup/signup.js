import React, {useState} from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {createStudent} from '../../actions/student';

const theme = createTheme();

const SignUp=()=> {

  const [StudentData,setStudentData]= useState({firstName:'',lastName: '',studentNumber: '',email:'',password: '',ApplyBus: ''});
  const dispatch =useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createStudent(StudentData));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={StudentData.firstName}
                  onChange={(e)=>setStudentData({...StudentData, firstName:e.target.value})}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={StudentData.lastName}
                  onChange={(e)=>setStudentData({...StudentData, lastName:e.target.value})}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="studentNumber"
                  label="Student Number"
                  name="studentNumber"
                  autoComplete="studentNumber"
                  value={StudentData.studentNumber}
                  onChange={(e)=>setStudentData({...StudentData, studentNumber:e.target.value})}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={StudentData.password}
                  onChange={(e)=>setStudentData({...StudentData, password:e.target.value})}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox
                  required 
                  name="ApplyBus" 
                  id="ApplyBus" 
                  color="primary" />}
                  label="Confirm that you are applying for student transport, Bus fees will apply to your Student Accont."
                  value={StudentData.ApplyBus}
                  onChange={(e)=>setStudentData({...StudentData, ApplyBus:e.target.value})}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
export default SignUp;