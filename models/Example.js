//===== MODEL.JS =========

//------- import mongoose -------
const mongoose = require('../db/connection.js');

//------- create schema function -------
const ExampleSchema = new mongoose.Schema({
	title: String,
	url: String,
});

//------- instantiate the model w/ schema -------
const Example = mongoose.model('Example', ExampleSchema);

//------- export model -------
module.exports = Example;
