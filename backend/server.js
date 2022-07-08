const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;

connection.once('open' , ()=>{
    console.log('mongoDB Database connection established successfully');
})

connection.on('error' , ()=> {
    console.log('you have an error');
})


const excercisesRouter = require('./routes/excercises');
const usersRouter = require('./routes/users');

app.use('/excercises' , excercisesRouter);
app.use('/users' , usersRouter); 




app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
})