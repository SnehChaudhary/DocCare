const mongoose = require('mongoose')

const recordSchema = mongoose.Schema({
    patientId: {type: mongoose.Schema.Types.ObjectId, ref:"patients"},
    doctorId: {type: mongoose.Schema.Types.ObjectId, ref:"doctor"},
    description: String,
    prescription: String,
    testDocuments: String
})

const Record = mongoose.model('record',recordSchema);

module.exports = Record;