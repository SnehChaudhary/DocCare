const express = require('express');
const Hospital = require('../model/hospital')
const Doctor = require('../model/doctor')
const jwt = require("jsonwebtoken");
const bcryptjs = require('bcryptjs');
const router = express.Router();
const {body,validationResult} = require('express-validator');
const fetchUser = require('../middleware/fetchUser');
const Appointment = require('../model/appointment');
const SECRET_KEY = "thisisdoccare";

router.post("/signup",[
    body('name',"Name should be of minimum length 3").isLength({min: 3}),
    body('address',"Enter valid address").isLength({min : 5}),
    body('contact',"Enter valid contact number").isLength(10),
    body('totalPatient',"Enter valid number of total patients.").not().isEmpty(),
    body('secKey',"Enter a valid secret key.").isLength({min: 7}),
    body('password',"Password should be atleast of length 8").isLength({min: 8}),
],async (req,res)=>{
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.send({ errors: result.array() });
    }

    const {name,address,contact,totalPatient,photo,secKey,password} = req.body;

    const salt = await bcryptjs.genSalt(10);

    const hashedPassword = await bcryptjs.hash(password,salt);

    Hospital.create({
        name: name,
        address: address,
        contact: contact,
        totalPatient: totalPatient,
        photo: photo,
        secKey: secKey,
        password: hashedPassword
    }).then(()=>{
        res.json({msg: "Please wait while your details are being verified!"});
    })
})

router.get("/signin",[
    body('secKey',"Enter a valid secret key.").isLength({min: 7}),
    body('password',"Enter a valid password.").isLength({min: 8})
],async (req,res)=>{
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.send({ errors: result.array() });
    }

    const {secKey,password} = req.body;

    const hospital = await Hospital.findOne({secKey});

    if(hospital == null){
        return res.json({msg: "Enter valid cretendials"});
    }

    if(!bcryptjs.compare(hospital.password,password)){
        return res.json({msg: "Enter the valid cretendials."})
    }

    if(!hospital.verified){
        return res.json({msg: "Your details are not verified yet!!"});
    }

    const token = jwt.sign({secKey},SECRET_KEY);

    res.json({token});
})

router.get('/alldoctor',fetchUser,async (req,res)=>{
    const key = jwt.decode(req.headers.token).secKey;

    const hospital = await Hospital.findOne({secKey: key});

    //console.log(hospital);

   const doctors = await Doctor.find({hospital: hospital._id});

    res.json({doctors});
})

router.put('/verify', fetchUser, async (req, res)=> {
    const {secKey} = req.body;

    const updated = await Hospital.findOneAndUpdate({secKey},{verified : true});

    res.json({msg : "Hospital Verified"});
})

router.get('/getDetail', fetchUser, async (req,res) => {

    const {token} = req.headers;

    const sec = jwt.decode(token).secKey;

    const hospital = await Hospital.findOne({secKey : sec});

    res.json({hospital});
})

router.get('/pendingAppointment', fetchUser, async (req,res) => {

    const {token} = req.headers;

    const sec = jwt.verify(token, SECRET_KEY).secKey;

    const hospital = await Hospital.findOne({secKey : sec});

    const hosId = hospital._id;

    const appointment = await Appointment.find({hospitalId : hosId, status : false});

    res.json({appointment});
})

router.get('/getAllAppointment', fetchUser, async (req,res) => {

    const {token} = req.headers;

    const sec = jwt.verify(token, SECRET_KEY).secKey;

    const hospital = await Hospital.findOne({secKey : sec});

    const hosId = hospital._id;

    const appointment = await Appointment.find({hospitalId : hosId, status : true});

    res.json({appointment});
})

module.exports = router;