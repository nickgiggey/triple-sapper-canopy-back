//===== MODEL.JS =========
//------- import mongoose -------
const mongoose = require('../db/connection.js');

//------- create schema function -------
const XampleSchema = new mongoose.Schema({
	title: String,
	url: String,
});

//------- instantiate the model w/ schema -------
const Xample = mongoose.model('Xample', XampleSchema);

//------- export model -------
module.exports = Xample;
