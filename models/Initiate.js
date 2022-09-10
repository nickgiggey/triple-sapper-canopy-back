//===== MODEL.JS =========

//------- import mongoose -------
const mongoose = require('../db/connection.js');

//------- create schema function -------
const InitiateSchema = new mongoose.Schema(
	{
		code: { type: String },
	},
	{
		timestamps: true,
		toJSON: {
			virtuals: true,
			transform: (_doc, ret) => {
				delete ret.code;
				return ret;
			}
		}
	}
);

//------- instantiate the model w/ schema -------
const Initiate = mongoose.model('Initiate', InitiateSchema);

//------- export model -------
module.exports = Initiate;
