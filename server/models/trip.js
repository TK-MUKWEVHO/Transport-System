import mongoose from 'mongoose';

const TripSchema = mongoose.Schema({
    name: String,
    studentNumber: Number,
    tripFromTo: String,
    time: String,
    status: {type: String, default: "Panding"},
    temperature: {type: Number, default: 0},
    date: {type: Date, default: new Date()},
    busRegistration: {type: String, default: "ss-2k-20"},
});
const Trip = mongoose.model('Trip', TripSchema);
export default Trip;