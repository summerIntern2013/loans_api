import mongoose from 'mongoose';

const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
    userId: Number,
    userName: String,
    userPassword: String,
    emailAddress: String
})

const userModel = mongoose.model( 'User', userSchema);

module.export = userModel;