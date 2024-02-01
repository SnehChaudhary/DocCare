const mongoose = require('mongoose')

const doctorData = mongoose.Schema({
    hospital : {type : mongoose.Schema.Types.ObjectId, ref:'hospital'},
    id : String,
    name : String,
    contact : String,
    speciality : String,
    birthDate : Date,
    gender : String,
    experience : Number,
    dateOfJoin : Date,
    password : String,
    verified : {type : Boolean, default : false}
})

const Doctor = mongoose.model('doctor', doctorData)

module.exports = Doctor