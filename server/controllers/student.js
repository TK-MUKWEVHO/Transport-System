import Student from '../models/student.js';

export const getStudent = async(req,res)=>{
    res.send("Student Details");
}

export const createStudent= async (req,res)=>{
    const student= req.body;

    const newStudent = new Student(student);
    try{
        await newStudent.save();
    }catch(error){
        res.status(409).json({message: error.message});
    }
}