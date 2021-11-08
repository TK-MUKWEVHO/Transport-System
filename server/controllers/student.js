import StudentTrip from '../models/studentTrip.js';

export const getStudent = async (req,res)=>{
    try {
        const studentTrip =await StudentTrip.find();
        res.status(200).json(studentTrip);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
export const getTrip=(req,res)=>{
    res.send("GetTripinfo");
}

export const reserveTrip=(req,res)=>{
    res.send("GetTripinfo");
}