import React, {useEffect} from "react";
import Form from "./components/Form/form";
import StudentTrip from "./components/StudentTrip/studentTrip";
import useStyle from './styles';
import {useDispatch} from 'react-redux';
import {getTrip} from './actions/studentTrip';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/material/Menu';
import AppBar from '@mui/material/AppBar';
import SignIn from "./components/signin/SignIn";
import SignUp from "./components/signup/signup";
const App=()=>{
    const Classes = useStyle();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTrip())
    }, [dispatch])
    return(
        
        <Container maxWith="sm">
            <Box>
            <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" align="center" component="div" sx={{ flexGrow: 1 }}>
            TUT BUS SERVICE
          </Typography>
          
        </Toolbar>
      </AppBar>

        <SignIn/>
    </Box>
    <SignUp/>
    </Container>
    );
}

export default App;