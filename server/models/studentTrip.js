import mongoose from 'mongoose';

const TripSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    studentNumber: Number,
    from: String,
    time: String,
    destination:  String,
    status: String,
});

const StudentTrip = mongoose.model('studentTrip', TripSchema);

export default StudentTrip;