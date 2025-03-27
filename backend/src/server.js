// Importing Express
const express = require('express');
const app = express();

//Importing PORT form .env file
const PORT = process.env.PORT || 3000;

//Middleware to parse JSON bodies
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Helloo Worlddd");
});

app.listen(PORT,()=>{
    console.log("Server is running on PORT: "+PORT);
})