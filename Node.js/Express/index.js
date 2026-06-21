const express=require('express');
const http=require('http');

const app=express();

app.get('/',(req,res)=>{
    res.send('Hello from the server');
});

app.get('/about',(req,res)=>{
    const username=req.query.username;
    res.send(`Hey there ${username} here and Go to https://www.narendrasaraf.in to know more about me !!`);
});

app.listen(8000,()=>{
    console.log('Server is running on port 8000');
})