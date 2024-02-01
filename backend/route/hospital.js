const express = require('express');
const {Hospital} = require('../model/hospital')
const jwt = require("jsonwebtoken");
const bcryptjs = require('bcryptjs');
const router = express.Router();
const {body,validationResult} = require('express-validator');

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

module.exports = router;