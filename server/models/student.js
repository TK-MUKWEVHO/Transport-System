import mongoose from 'mongoose';

const StudentSchema = mongoose.Schema({
    name: {type: String, required},
    studentNumber: {type: String, required},
    password: {type: String}, required,
    id:{type: String},
});

const Student = mongoose.model('Student', StudentSchema);

export default Student;