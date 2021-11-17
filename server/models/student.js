import mongoose from 'mongoose';

const StudentSchema = mongoose.Schema({
    name: String,
    studentNumber: Number,
    password:String,
    id: String,
});

const Student = mongoose.model('Student', StudentSchema);

export default Student;