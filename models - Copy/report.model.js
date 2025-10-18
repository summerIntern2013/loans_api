import mongoose from 'mongoose';

const { default: mongoose } = require("mongoose");

const reportSchema = mongoose.Schema({
    reportName: String,
    reportType: String,
    reportAmount: String,
    reportIssueDate: Date,
    reportStatus: String
})

const reportModel = mongoose.model( 'Report', reportSchema);

module.export = reportModel;