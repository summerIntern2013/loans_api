import mongoose from 'mongoose';

const { default: mongoose } = require("mongoose");

const customerSchema = mongoose.Schema({
    customerId: Number,
    firstName: String,
    lastName: String,
    phoneNumber: String,
    emailAddress: String,
    state: String,
    department: String
})

const customerModel = mongoose.model( 'Customers', customerSchema);

module.export = customerModel;