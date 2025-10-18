import mongoose from 'mongoose';

const { default: mongoose } = require("mongoose");

const loanSchema = mongoose.Schema({
    loanName: String,
    loanType: String,
    loanAmount: String,
    loanIssueDate: Date,
    loanStatus: String
})

const loanModel = mongoose.model( 'Loan', loanSchema);

module.export = loanModel;