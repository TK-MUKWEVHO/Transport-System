import StudentTrip from '../models/studentTrip.js';

export const getTrip = async (req,res)=>{
    try {
        const studentTrip =await StudentTrip.find();
        res.status(200).json(studentTrip);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getStudent = async(req,res)=>{
    res.send("Student Details");
}

export const reserveTrip= async (req,res)=>{
    const trip= req.body;

    const newTrip = new StudentTrip(trip);
    try{
        await newTrip.save();
    }catch(error){
        res.status(409).json({message: error.message});
    }
}