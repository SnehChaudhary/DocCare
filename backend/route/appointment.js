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

    const date = Date.now().getFullYear() + "-" + Date.now().getMonth() + "-" + Date.now().getDate();

    const time = Date.now().getHours() + " : " + Date.now().getMinutes(); 

    await Appointment.create({
        hospitalId,patientId,doctorId,date,time 
    });

    res.send("Request send!");
})

router.put('/accept',fetchUser,async (req,res)=>{
    const {reqId,date,time} = req.body;

    const dateTime = date + "T" + time;

    console.log(dateTime);

    await Appointment.updateOne({_id: reqId},{date: dateTime,status: true});

    res.json({msg: "Request Accepted!"});
})

router.put('/reject',fetchUser,async (req,res)=>{
    const {reqId} = req.body;

   const response = await Appointment.deleteOne({_id: reqId.toString()});

    res.json({msg: "Request Rejected!"});
})

module.exports = router;
