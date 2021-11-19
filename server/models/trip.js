import mongoose from 'mongoose';

const TripSchema = mongoose.Schema({
    name: String,
    studentNumber: Number,
    tripFromTo: String,
    status: {type: String, default: "Panding"},
    temperature: {type: Number, default: 0},
    date: {type: Date, default: new Date()},
    time: String,
    busRegistration: String,
});
const Trip = mongoose.model('Trip', TripSchema);
export default Trip;