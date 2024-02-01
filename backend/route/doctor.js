const express = require('express');
const router = express.Router();
const Doctor = require('../model/doctor');
const Hospital = require('../model/hospital');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {body,validationResult} = require('express-validator');

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

router.get('/signin', [
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

module.exports = router;