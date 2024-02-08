const express = require('express')
const connectToMongo  = require('./db')
const patient = require('./route/patient');
const hospital = require('./route/hospital');
const doctor = require('./route/doctor');
const record = require('./route/record');
const appointment = require('./route/appointment')
var cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

connectToMongo();

app.use('/patient',patient);
app.use('/hospital',hospital);
app.use('/doctor',doctor);
app.use('/record',record);
app.use('/appointment',appointment);

app.listen(5000, () => { console.log("Connected to backend")})  