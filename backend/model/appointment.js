const mongoose = require('mongoose');

const appointment = mongoose.Schema({
    hospitalId : {type : mongoose.Schema.Types.ObjectId, ref : 'hospital'},
    patientId : {type : mongoose.Schema.Types.ObjectId, ref : 'patient'},
    doctorId : {type : mongoose.Schema.Types.ObjectId, ref : 'doctor'},
    date : Date,
    status : {type : Boolean, default : false}
})

const Appointment = mongoose.model('appointment', appointment);

module.exports = Appointment;