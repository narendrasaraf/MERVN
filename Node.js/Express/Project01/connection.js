
const mongoose=require('mongoose');

// connection with mongoose

async function connectMongoDB(url) {
    return mongoose.connect(url);
}
// mongoose
//     .connect('mongodb://127.0.0.1:27017/RESTAPI')
//     .then(()=>console.log('💯 MongoDB connected successfully !'))
//     .catch((err)=> console.log('Failed to connect MongoDB',err));

module.exports = {
    connectMongoDB
};