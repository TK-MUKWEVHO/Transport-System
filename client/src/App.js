import React, {useEffect} from "react";
import Form from "./components/Form/reserveTrip";
import StudentTrip from "./components/StudentTrip/studentTrip";
import useStyle from './styles';
import {useDispatch} from 'react-redux';
import {getTrip} from './actions/studentTrip';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import NavBar from "./components/NavBar/NavBar";



const App=()=>{
    const Classes = useStyle();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTrip())
    }, [dispatch])
    return(
        
        <Container maxWith="sm">
            <Box>
               <NavBar/>
              
              <StudentTrip/>
            </Box>
         </Container>
    );
}

export default App;