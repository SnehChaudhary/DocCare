const express = require('express')
const db = require('./db')
const {Hospital} = require('./model/hospital')
const {Doctor} = require('./model/doctor')

const {Record} = require('./model/record');
const app = express()

db()

Hospital.find({}).then((res)=>{console.log(res)})
    // db().catch((error)=>{console.log("Hello")})

Record.find().then((res)=>{console.log(res)})

app.listen(5000, () => { console.log("Connected to backend")})