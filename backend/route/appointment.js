const express = require('express');
const fetchUser = require('../middleware/fetchUser');
const jwt = require("jsonwebtoken");
const Appointment = require('../model/appointment');
const Patient = require('../model/patient');
const router = express.Router();

router.post('/book',fetchUser,async (req,res)=>{
    const patient = jwt.decode(req.headers.token).emailId;

    const patientDetail = await Patient.findOne({emailId: patient});

    const patientId = patientDetail._id;

    const {hospitalId,doctorId} = req.body;

    await Appointment.create({
        hospitalId,patientId,doctorId,date: Date.now()
    });

    res.send("Request send!");
})

router.put('/accept',fetchUser,async (req,res)=>{
    const {reqId,date} = req.body;

    await Appointment.updateOne({_id: reqId},{date: date,status: true});

    res.send("Request Accepted!");
})

module.exports = router;
