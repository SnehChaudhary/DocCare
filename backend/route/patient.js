const express = require('express');
const {Patient} = require('../model/patient');
const jwt = require('jsonwebtoken');
const bcryptjs = require("bcryptjs");
const router = express.Router();
const SECRET_KEY = "thisisdoccare";
const {body, validationResult} = require("express-validator");

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

router.get("/signin", [
    body('emailId',"Enter valid email").isEmail(),
    body('password',"Password should be of minimum length 8").isLength({min : 8})
], async (req,res)=>{

    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.send({ errors: result.array() });
    }
    
    const {emailId,password} = req.body;

    const patient = await Patient.findOne({emailId});

    if(!bcryptjs.compare(patient.password,password)) {
        return res.json({msg: "Enter valid credtetial!"});
    }

    const token = jwt.sign({emailId},SECRET_KEY);

    res.json({token});
})

module.exports = router;