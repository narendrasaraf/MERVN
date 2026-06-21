
const mongoose=require('mongoose');

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


module.exports=User;