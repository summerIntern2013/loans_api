import mongoose from 'mongoose';

const { default: mongoose } = require("mongoose");

const paymentSchema = mongoose.Schema({
    paymentName: String,
    paymentType: String,
    paymentAmount: String,
    paymentIssueDate: Date,
    paymentStatus: String
})

const paymentModel = mongoose.model( 'Payment', paymentSchema);

module.export = paymentModel;