import React, {useEffect} from "react";
import useStyle from './styles';
import {useDispatch} from 'react-redux';
import {getTrip} from './actions/studentTrip';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import NavBar from "./components/NavBar/NavBar";
import BookTrip from "./components/Form/BookTrip";
import ConfirmTrip from "./components/Form/ConfirmTrip";
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
               <NavBar/>
               
               <BookTrip/>  
               <SignUp/>        
            </Box>
         </Container>
    );
}

export default App;