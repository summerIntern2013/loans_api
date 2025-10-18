import mongoose from 'mongoose';

const { default: mongoose } = require("mongoose");

const invoiceSchema = mongoose.Schema({
    invoiceName: String,
    invoiceType: String,
    invoiceAmount: String,
    invoiceIssueDate: Date,
    invoiceStatus: String
})

const invoiceModel = mongoose.model( 'Invoice', invoiceSchema);

module.export = invoiceModel;