import mongoose from 'mongoose';

const { default: mongoose } = require("mongoose");

const paymentSchema = mongoose.Schema({
    paymentId: Number,
    customerId: Number,
    customerName: String,
    amount: Number,
    tax: Number,
    mode: String,
    date: Date,
    notes: String
})

const paymentModel = mongoose.model( 'Payment', paymentSchema);

module.export = paymentModel;