import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import tripRoutes from './routes/trip.js'
import stdRoutes from './routes/student.js';

const app = express();
const PORT = process.env.PORT || 5000;




app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
app.use('/trip', tripRoutes);
app.use('/student',stdRoutes);
//Connectio
const CONNECTION_URL =
  "mongodb+srv://TransportSystem:Transport1@cluster0.pbh06.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    console.log(`Database is running`)
  )
  .catch((error) => console.log(error.message));
app.listen(PORT, () => console.log(`Server up on Port: ${PORT}`));