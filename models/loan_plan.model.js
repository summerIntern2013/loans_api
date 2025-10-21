import mongoose from 'mongoose';

const { default: mongoose } = require("mongoose");

const loanPlanSchema = mongoose.Schema({
    loanId: String,
    customerName: String,
    loanType: String,
    lastPayment: Date,
    paymentDue: Date,
    loanStatus: String
})

const loanPlanModel = mongoose.model( 'Loan Plan', loanPlanSchema);

module.export = loanPlanModel;