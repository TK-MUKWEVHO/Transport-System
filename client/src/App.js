import React, {useState} from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Authetication from './components/Authetication/Authetication';
import Trip from "./components/Trip/Trip";
import ConfirmTrip from "./components/ConfirmTrip/ConfirmTrip";

const App=()=>{
   const user= useState(JSON.parse(localStorage.getItem('profile')));
    return(
        <Router>
        <Container maxWith="sm">
            <Box>
               <NavBar/> 
               <Routes>
                  <Route exact path="/" element={<Authetication/>}/>
                  <Route exact path="/home" element={<Trip/>}/>
                  <Route exact path="/confirm" element={<ConfirmTrip/>}/>
               </Routes>     
            </Box>
         </Container>
        </Router>
    );
}
export default App;