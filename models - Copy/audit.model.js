import mongoose from 'mongoose';

const { default: mongoose } = require("mongoose");

const auditSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    emailAddress: String,
    dob: String
})

const auditModel = mongoose.model( 'Audit', auditSchema);

module.export = auditModel;