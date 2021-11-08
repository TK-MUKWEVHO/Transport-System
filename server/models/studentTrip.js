import mongoose from 'mongoose';

const TripSchema = mongoose.Schema({
    studentNumber: Number,
    originPoint: String,
    destinationPoint:  String,
    time: Date,
});

const StudentTrip = mongoose.model('studentTrip', TripSchema);

export default StudentTrip;