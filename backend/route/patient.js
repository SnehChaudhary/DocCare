const express = require('express');
const Patient = require('../model/patient');
const jwt = require('jsonwebtoken');
const bcryptjs = require("bcryptjs");
const router = express.Router();
const SECRET_KEY = "thisisdoccare";
const {body, validationResult} = require("express-validator");
const fetchUser = require('../middleware/fetchUser');
const Record = require('../model/record');
const Appointment = require('../model/appointment');

router.post("/signup", [
    body('name',"Name should be of minimum length 3").isLength({min : 3}),
    body('contact',"Enter valid contact number").isLength(10),
    body('height',"Enter height in cm").not().isEmpty(),
    body('gender',"Select valid gender").not().isEmpty(),
    body('emailId',"Enter valid email").isEmail(),
    body('address',"Enter valid address").isLength({min : 5}),
    body('weight',"Enter weight in kg").not().isEmpty(),
    body('bloodGroup',"Enter valid Blood Group").not().isEmpty(),
    body('birthDate',"Enter valid Birth date").isDate(),
    body('password',"Password should be of minimum length 8").isLength({min : 8})

] ,async (req,res)=>{

    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.send({ errors: result.array() });
    }

    
    const {name,contact,gender,emailId,address,height,weight,bloodGroup,birthDate,photo,password} = req.body;

    const salt = await bcryptjs.genSalt(10);

    const hashedPassword = await bcryptjs.hash(password,salt);

    Patient.create({ 
        name,contact,gender,emailId,address,height,weight,bloodGroup,birthDate,photo,password: hashedPassword
    }).then(()=>{
        res.json({msg : "User created!"});
    })
})

router.post("/signin", [
    body('emailId',"Enter valid email").isEmail(),
    body('password',"Password should be of minimum length 8").isLength({min : 8})
], async (req,res)=>{

    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.send({ errors: result.array() });
    }
    
    const {emailId,password} = req.body;

    const patient = await Patient.findOne({emailId});

    if(!patient){
        return res.json({msg: "Enter valid credentials!"})
    } 

    bcryptjs.compare(password,patient.password,(err,response)=>{
        if(!response){
            return res.json({msg: "Enter valid credtetial!"});
        }

        const token = jwt.sign({emailId},SECRET_KEY);

        return res.json({msg:"Login Success",token: token});
    })
})

router.get('/record',fetchUser,async (req,res)=>{
    const patientId = jwt.decode(req.headers.token);
    
    const patient = await Patient.findOne({emailId: patientId.emailId});

    const records = await Record.find({patientId: patient._id});

    res.json({records});
})

router.get("/getDetail",fetchUser,async (req,res)=>{
    const patient = jwt.decode(req.headers.token);

    const patientId = patient.emailId;

    const patiendDetails = await Patient.findOne({emailId: patientId});

    res.json(patiendDetails);
})

router.put('/updateDetail', fetchUser, [
    body('contact',"Enter valid contact number").isLength(10),
    body('height',"Enter height in cm").not().isEmpty(),
    body('address',"Enter valid address").isLength({min : 5}),
    body('weight',"Enter weight in kg").not().isEmpty(),
], async (req, res) => {

    const err = validationResult(req);

    if(!err.isEmpty())
    {
        return res.json({errors : err.array()});
    }

    const {contact, address, height, weight} = req.body;
    const {token} = req.headers;

    const pat = jwt.decode(token);
    const email = pat.emailId;

    const updatedPatient = await Patient.findOneAndUpdate({emailId : email}, {contact, address, height, weight});

    res.json({msg : "Patient details Updated !!"});
})

router.get('/pendingAppointment', fetchUser, async (req,res) => {

    const {token} = req.headers;

    const email = jwt.verify(token, SECRET_KEY).emailId;

    const patient = await Patient.findOne({emailId : email});

    const patId = patient._id;

    const appointment = await Appointment.find({patientId : patId, status : false});

    res.json({appointment});
})

module.exports = router;