const express = require('express')
const db = require('./db')

const app = express()

db()
    // db().catch((error)=>{console.log("Hello")})

app.listen(5000, () => { console.log("Connected to backend")})