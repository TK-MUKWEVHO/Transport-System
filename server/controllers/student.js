import Student from '../models/student.js';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const secret = 'test';

export const signin=async(req,res)=>{
    const {studentNumber,password}=req.body;
    try {
        const findStudent =await Student.findOne({studentNumber});
        if(!findStudent) return res.status(404).json({message: "Student does not exist"});
        const correctPassword =await bcrypt.compare(password,findStudent.password);
        if(!correctPassword) return res.status(400).json({message: "Invalid Password"});
        const token =jwt.sign({studentNumber: findStudent.studentNumber,id: findStudent._id},secret,{expiresIn:"1h"});
        res.status(200).json({result: findStudent,token});
    } catch (error) {
        res.status(500).json({message: "Something went wrong"});
        console.log(error);
    }
};

export const signup=async(req,res)=>{

    const {firstName,lastName,studentNumber,password}= req.body;

    try {
        //const findStudent = await Student.findOne(studentNumber);
        //if(findStudent) return res.status(400).json({message: "Student Already Exist"});
        const hashPassword = await bcrypt.hash(password,12);
        const outCome= await Student.create({name:`${firstName} ${lastName}`,studentNumber,password: hashPassword});
        const token =jwt.sign({studentNumber: outCome.studentNumber,id:outCome._id},secret,{expiresIn: '1h'});
        res.status(201).json({outCome,token});
    } catch (error) {
        res.status(500).json({message: "Something went wrong"});
        console.log(error);
    }
};


