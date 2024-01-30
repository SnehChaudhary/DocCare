const express = require('express')
const db = require('./db')
const {Record} = require('./model/record');
const app = express()

db()

Record.find().then((res)=>{console.log(res)})

app.listen(5000, () => { console.log("Connected to backend")})