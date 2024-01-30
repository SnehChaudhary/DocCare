const mongoose = require("mongoose");

const patientSchema = mongoose.Schema({
    name: String,
    contact: String,
    gender: String,
    emailId: String,
    address: String,
    height: Number,
    weight: String,
    bloodGroup: String,
    birthDate: Date,
    photo: String
});

const Patient = mongoose.model('patients',patientSchema);

module.exports = {Patient};