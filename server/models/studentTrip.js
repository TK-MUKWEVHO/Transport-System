import mongoose from 'mongoose';

const TripSchema = mongoose.Schema({
    name: String,
    studentNumber: Number,
    from: String,
    time: String,
    destination:  String,
    temperature: Number,
    status:{ type: String, default: "Panding"},

});

const StudentTrip = mongoose.model('studentTrip', TripSchema);

export default StudentTrip;