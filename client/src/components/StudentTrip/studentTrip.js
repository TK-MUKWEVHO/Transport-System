import React from "react";
import useStyle from './styles';
import {useSelector} from 'react-redux';

const StudentTrip = ()=>{
    const studentTrip =useSelector((state)=>state.studentTrip);
    const Classes = useStyle();

    console.log(studentTrip);
    return(
        <h1>Trip Information</h1>
    );
}

export default StudentTrip;