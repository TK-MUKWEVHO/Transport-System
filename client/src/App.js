import React, {useEffect} from "react";
import {useDispatch} from 'react-redux';
import {getTrip} from './actions/studentTrip';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Authetication from './components/Authetication/Authetication';


const App=()=>{
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTrip())
    }, [dispatch])

    
    return(
        <BrowserRouter>
        <Container maxWith="sm">
            <Box>
               <NavBar/> 
               <Authetication/>      
            </Box>
         </Container>
        </BrowserRouter>
    );
}

export default App;