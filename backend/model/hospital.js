const mongoose = require('mongoose')

const hospitalData = mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    address : {
        type : String,
        require : true
    },
    contact : String,
    totalPatient : Number,
    photo : String
})

const Hospital = mongoose.model('hospital',hospitalData)

module.exports = {Hospital}