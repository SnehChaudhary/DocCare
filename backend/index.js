const express = require('express')
const db = require('./db')
const {Hospital} = require('./model/hospital')
const {Doctor} = require('./model/doctor')

const app = express()

db()

Hospital.find({}).then((res)=>{console.log(res)})
    // db().catch((error)=>{console.log("Hello")})

app.listen(5000, () => { console.log("Connected to backend")})