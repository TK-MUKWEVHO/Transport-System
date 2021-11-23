import Trip from '../models/trip.js';

export const getTrip = async (req,res)=>{
    const studentNum=req.body;
    console.log(studentNum);
    try {
        const studentTrip =await Trip.find({studentNumber: studentNum,status: "Panding"});
        res.status(200).json(studentTrip);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const reserveTrip= async (req,res)=>{
    const trip= req.body;
    const findTrip=Trip.find({studentNumber: trip.studentNumber,status: "Panding"});
    if(findTrip) return res.status(400).json({message: "Can not two trip at a time"});
    const newTrip = new Trip({...trip,date: new Date().toISOString()});
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
