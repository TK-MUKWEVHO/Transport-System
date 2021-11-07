const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

//Init
const app = express();
const PORT = process.env.PORT || 3000;

// use middlewares
app.use(cors());
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());

//Connection to database
const CONNECTION_URL =
  "mongodb+srv://TransportSystem:Transport1@cluster0.pbh06.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    console.log(`Database is running`)
  )
  .catch((error) => console.log(error.message));


//server listen
app.listen(PORT, () => console.log(`Server up on Port: ${PORT}`));