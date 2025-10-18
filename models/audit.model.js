import mongoose from 'mongoose';

const { default: mongoose } = require("mongoose");

const auditSchema = mongoose.Schema({
    auditName: String,
    auditType: String,
    auditAmount: String,
    auditIssueDate: Date,
    auditStatus: String
})

const auditModel = mongoose.model( 'Audit', auditSchema);

module.export = auditModel;