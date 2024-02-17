const mongoose = require('mongoose');

const appointment = mongoose.Schema({
    hospitalId : {type : mongoose.Schema.Types.ObjectId, ref : 'hospital'},
    patientId : {type : mongoose.Schema.Types.ObjectId, ref : 'patient'},
    doctorId : {type : mongoose.Schema.Types.ObjectId, ref : 'doctor'},
    date : {type: mongoose.Schema.Types.String},
    time : {type: mongoose.Schema.Types.String},
    status : {type : Boolean, default : false}
})

const Appointment = mongoose.model('appointment', appointment);

module.exports = Appointment;