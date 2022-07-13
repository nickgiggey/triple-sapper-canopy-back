//===== MODEL.JS =========

//------- import mongoose -------
const mongoose = require('../db/connection.js');

//------- create schema function -------
const GuestSChema = new mongoose.Schema({
	name: String,
	email: String,
	partySize: Number,
	roominfo: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Room',
	},
});

//------- instantiate the model w/ schema -------
const Guest = mongoose.model('Guest', GuestSChema);

//------- export model -------
module.exports = Guest;
