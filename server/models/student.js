import mongoose from 'mongoose';

const StudentSchema = mongoose.Schema({
    student: String,
    firstname: String,
    lastname: String,
    email: String,
    student: Number,
    password: String
});

const Student = mongoose.model('Student', StudentSchema);

export default Student;