const express = require('express');
const router = express.Router();
const Doctor = require('../model/doctor');
const Hospital = require('../model/hospital');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {body,validationResult} = require('express-validator');
const fetchUser = require('../middleware/fetchUser');
const Patient = require('../model/patient');
const Record = require('../model/record');

const SECRET_KEY = "thisisdoccare";

router.post('/signup', [
    body('id', 'Enter valid id').isLength(10),
    body('name', 'Enter valid name').isLength({min: 3}),
    body('contact', 'Enter valid contact Number').isLength(10),
    body('speciality', 'Enter valid Speciality').isLength({min : 5}),
    body('birthDate', 'Enter valid date').isDate(),
    body('gender',"Select valid gender").not().isEmpty(),
    body('experience',"Select valid gender").not().isEmpty(),
    body('dateOfJoin', 'Enter valid date').isDate(),
    body('password',"Password should be of minimum length 8").isLength({min : 8}),
    body('secKey', 'Secret Key is wrong').isLength(7)

], async (req,res) => {

    const result = validationResult(req);

    if(!result.isEmpty())
    {
        return res.json({errors : result.array()});
    }

    const {id, name, contact, speciality, birthDate, gender, experience, dateOfJoin, password, secKey} = req.body;

    const hospital = await Hospital.findOne({secKey});
    const hospitalId = hospital._id;

    const salt = await bcryptjs.genSalt(11);
    const hashPassword = await bcryptjs.hash(password,salt);

    Doctor.create({hospital : hospitalId, id, name, contact, speciality, birthDate, gender, experience, dateOfJoin, password : hashPassword})
    .then(()=>{ 
        res.json({msg : "Your account will be activated once your hospital accepts it !!"});
    })
})

router.post('/signin', [
    body('id', 'Enter valid id').isLength(10),
    body('password',"Password should be of minimum length 8").isLength({min : 8}),
], async (req,res) => {

    const result = validationResult(req);

    if(!result.isEmpty())
    {
        return res.json({errors : result.array()});
    }

    const {id, password} = req.body;

    const doctor = await Doctor.findOne({id});

    if(!doctor)
    {
        return res.json({msg : "Enter valid credentials !!"});
    }

    if(!doctor.verified)
    {
        return res.json({msg : "Enter valid credentials v !!"});
    }

    if(!bcryptjs.compare(doctor.password, password))
    {
        return res.json({msg : "Enter valid credentials !!"});
    }

    const token = jwt.sign(id, SECRET_KEY);

    res.json({token : token});
})

router.get('/allrecord',fetchUser,[
    body("emailId","Enter a valid email.").isEmail()
],async (req,res)=>{

    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.send({ errors: result.array() });
    }

    const emailId = req.body.emailId;

    const patientId = await Patient.findOne({emailId});

    if(patientId == null){
        res.send("Enter a valid patient email id.");
    }

    const records = await Record.find({patientId: patientId._id});

    res.json({records});
})

router.put('/verified',fetchUser,async (req,res)=>{
    const {id} = req.body;

    await Doctor.updateOne({id},{verified: true});

    res.send("Doctor is verified successfully!!");
})

router.get("/getDetail",fetchUser,async (req,res)=>{
    const doctor = jwt.decode(req.headers.token);

    const doctorId = doctor;

    const doctorDetails = await Doctor.findOne({id: doctorId});

    res.json(doctorDetails);
})

module.exports = router;