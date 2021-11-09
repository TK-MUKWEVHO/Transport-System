import React, {useEffect} from "react";
import Form from "./components/Form/form";
import StudentTrip from "./components/StudentTrip/studentTrip";
import useStyle from './styles';
import {useDispatch} from 'react-redux';
import {getTrip} from './actions/studentTrip';

const App=()=>{
    const Classes = useStyle();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTrip())
    }, [dispatch])
    return(
        <div>
            <h1>Hellow World</h1>
            <Form/>
            <StudentTrip/>
        </div>
        
    );
}

export default App;