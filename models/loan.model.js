import mongoose from 'mongoose';

const { default: mongoose } = require("mongoose");

const loanSchema = mongoose.Schema({
    loanId: String,
    customerName: String,
    loanType: String,
    installments: String,
    roi: Number,
    totalAmount: Number,
    pendingAmount: Number,
    loanStatus: String
})

const loanModel = mongoose.model( 'Loan', loanSchema);

module.export = loanModel;