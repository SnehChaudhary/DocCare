const mongoose = require('mongoose')
const url = 'mongodb://127.0.4.1:27017/doccare';

const connectToMongo = () => {
    mongoose.connect('1.1.1.1').then(()=>{console.log("Connected")}).catch((error)=>{console.log("Hello",error)});
}

module.exports = connectToMongo;