const express = require('express');
const port = 8000;
const users = require('./MOCK_DATA.json');
const mongoose=require('mongoose');

const app = express();

// Routes through REST API
app.get('/api/users', (req, res) => {
    res.json(users);
});

// connection with mongoose
mongoose
    .connect('mongodb://127.0.0.1:27017/RESTAPI')
    .then(()=>console.log('💯 MongoDB connected successfully !'))
    .catch((err)=> console.log('Failed to connect MongoDB',err));

// Mongodb schema 
const userSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    job_title:{
        type:String,
    },
    gender:{
        type:String,
    },
});

const user=mongoose.model('user',userSchema);

// Middleware to parse JSON bodies --- > Postman
app.use(express.urlencoded({extended:false}));
app.use(express.json()); //-----> pointing to next middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.route('/api/users/:id')
    .get(async(req, res) => {
        const user =  await user.findById(req.params.id);
        // const user1 = users.find((user) => user.id === parseInt(id, 10));
        return res.json(user);
    })
    .patch((req, res) => {
        // Edit user id 
        return res.json({message: "User updated successfully"});
    })
    .delete((req, res) => {
        // Delete user id 
        return res.json({message: "User deleted successfully"});
    });



app.post('/api/users',async (req, res) => {
    const body=req.body;
    if(
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_title
    ) {
    return res.status(400).json({message: "All fields are required"}); 
    }
    const result =await user.create({
        firstName:body.first_name,
        lastName:body.last_name,
        email:body.email,
        gender:body.gender,
        job_title:body.job_title,
    });
    console.log("result",result);
    return res.status(201).json({msg:"Success"})
});

app.listen(port, () => { console.log(`Server is running on port ${port}`) });