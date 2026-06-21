const express = require('express');
const port = 8000;
const users = require('./MOCK_DATA.json');
const mongoose=require('mongoose');
const userRouter=require('./routes/user');
const {connectMongoDb}=require('./connection');
const {logreqres}=require('./middleware');

const app = express();

connectMongoDb('mongodb://127.0.0.1:27017/RESTAPI');



// Middleware to parse JSON bodies --- > Postman
app.use(express.urlencoded({extended:false}));
app.use(logreqres('log.txt')); //-----> pointing to next middleware



app.use('/user',userRouter);

app.listen(port, () => { console.log(`Server is running on port ${port}`) });