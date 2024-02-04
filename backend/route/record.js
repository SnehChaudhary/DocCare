const express = require('express');
const router = express.Router();
const fetchUser = require("../middleware/fetchUser");
const Patient = require("../model/patient");
const Record = require("../model/record");
const Doctor = require("../model/doctor");
const jwt = require('jsonwebtoken');
const Hospital = require('../model/hospital');

router.post('/user',fetchUser,async (req,res)=>{
    const {description,prescription,testDocuments} = req.body;

    const emailId = jwt.decode(req.headers.token).emailId;

    const patient = await Patient.findOne({emailId});

    await Record.create({
        patientId: patient._id,
        description,prescription,testDocuments
    });

    res.send("Record added!");
})

router.post('/doctor',fetchUser,async (req,res)=>{
    const {emailId,description,prescription,testDocuments} = req.body;

    const doctor = jwt.decode(req.headers.token);

    const doctorId = await Doctor.findOne({id: doctor});

    const patient = await Patient.findOne({emailId});

    const hospitalId = doctorId.hospital;

    const hospital = await Hospital.findOne({_id: hospitalId});

    const totalPatient = hospital.totalPatient;

    await Hospital.updateOne({_id: hospitalId},{totalPatient: totalPatient+1});

    await Record.create({
        patientId: patient._id,
        doctorId: doctorId._id,
        description,prescription,testDocuments
    });

    res.send("Record added by doctor!");
})

module.exports = router;