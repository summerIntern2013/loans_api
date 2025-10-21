import mongoose from 'mongoose';

const { default: mongoose } = require("mongoose");

const invoiceSchema = mongoose.Schema({
    paymentId: Number,
    customerId: Number,
    customerName: String,
    amount: Number,
    tax: Number,
    mode: String,
    date: Date,
    notes: String
})

const invoiceModel = mongoose.model( 'Invoice', invoiceSchema);

module.export = invoiceModel;