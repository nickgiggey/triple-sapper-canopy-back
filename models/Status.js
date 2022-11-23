//===== MODEL.JS =========

//------- import mongoose -------
const mongoose = require('../db/connection.js');

//------- create schema function -------
const StatusSchema = new mongoose.Schema({
	code: { type: String },
	Authorization: { type: String },
});

//------- instantiate the model w/ schema -------
const Status = mongoose.model('Status', StatusSchema);

//------- export model -------
module.exports = Status;
