require('dotenv').config();

// Importing Express
const express = require('express');

//Importing Mongo DB Connect method
const connectDB = require('./config/db');

//Importing PORT form .env file
const PORT = process.env.PORT ;

const app = express();

//Initialising Mongo DB Connection
connectDB();

//Middleware to parse JSON bodies
app.use(express.json())


app.get("/", (req, res) => {
  res.send("Helloo Worlddd");
});

app.listen(PORT,()=>{
    console.log("Server is running on PORT: "+PORT);
})