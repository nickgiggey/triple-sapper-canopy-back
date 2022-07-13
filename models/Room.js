//===== MODEL.JS =========

//------- import mongoose -------
const mongoose = require('../db/connection.js');

//------- create schema function -------
const RoomSChema = new mongoose.Schema({
	roomnumber: String,
	availability: Boolean,
	guestinfo: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Guest',
	},
});

//------- instantiate the model w/ schema -------
const Room = mongoose.model('Room', RoomSChema);

//------- export model -------
module.exports = Room;
