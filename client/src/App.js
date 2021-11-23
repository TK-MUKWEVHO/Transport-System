import React, {useState,useEffect} from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Authetication from './components/Authetication/Authetication';
import Trip from "./components/Trip/Trip";
import ConfirmTrip from "./components/ConfirmTrip/ConfirmTrip";
import { useDispatch,useSelector } from 'react-redux';
import {getTrip} from './actions/trip';
import { useLocation } from 'react-router-dom';


const App=()=>{
   //const location = useLocation();
   const dispatch = useDispatch();
    useEffect(() => {
    dispatch(getTrip());
    },[]);
    
    return(
        <Router>
        <Container maxWith="sm">
            <Box>
               <NavBar/> 
               <Routes>
                  <Route exact path="/" element={<Authetication/>}/>
                  <Route exact path="/home" element={<Trip/>}/>
                  <Route exact path="/confirm/:studentNumber" element={<ConfirmTrip/>}/>
               </Routes>     
            </Box>
         </Container>
        </Router>
    );
}
export default App;