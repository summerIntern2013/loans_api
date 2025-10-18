import mongoose from 'mongoose';

const { default: mongoose } = require("mongoose");

const settingSchema = mongoose.Schema({
    settingAuthor: String,
    settingName: String,
    settingType: String,
    settingIssueDate: Date,
    settingStatus: String
})

const settingModel = mongoose.model( 'Setting', settingSchema);

module.export = settingModel;