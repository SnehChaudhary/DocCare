const mongoose = require('mongoose')
const url = 'mongodb+srv://admin:dbjZVGL9g1ZmSpwU@cluster0.zlftnje.mongodb.net/docCare';

const connectToMongo = () => {
    mongoose.connect(url).then(()=>{console.log("Connected")}).catch((error)=>{console.log("Hello",error)});
}

module.exports = connectToMongo;