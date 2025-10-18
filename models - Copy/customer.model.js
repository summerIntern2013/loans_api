import mongoose from 'mongoose';

const { default: mongoose } = require("mongoose");

const customerSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    emailAddress: String,
    dob: String
})

const customerModel = mongoose.model( 'Customers', customerSchema);

module.export = customerModel;