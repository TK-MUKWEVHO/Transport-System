import React, {useEffect} from "react";
import {useDispatch} from 'react-redux';
//import {getTrip} from './actions/studentTrip';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Authetication from './components/Authetication/Authetication';
import Trip from "./components/Trip/Trip";


const App=()=>{
   /* const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTrip())
    }, [dispatch])*/

    
    return(
        <Router>
        <Container maxWith="sm">
            <Box>
               <NavBar/> 
               <Routes>
                  <Route exact path="/" element={<Authetication/>}/>
                  <Route exact path="/home" element={<Trip/>}/>
               </Routes>     
            </Box>
         </Container>
        </Router>
    );
}

export default App;