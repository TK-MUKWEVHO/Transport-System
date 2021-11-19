import Trip from '../models/trip.js';

export const getTrip = async (req,res)=>{
    const {studentNum}=req.query;
    try {
        const studentTrip =await Trip.find({studentNumber: studentNum,status: "Panding"});
        res.status(200).json(studentTrip);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const reserveTrip= async (req,res)=>{
    const trip= req.body;

    const newTrip = new Trip(trip);
    try{
        await newTrip.save();
    }catch(error){
        res.status(409).json({message: error.message});
    }
}

export const confirmTrip=async(req,res)=>{
    const {id} = req.params;
    const {temperature}=req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Trip with id: ${id}`);

    const updateTrip={temperature,status:"Going",_id: id};
    await Trip.findByIdAndUpdate(id,updateTrip,{new: true});
    res.json(updateTrip);
}
