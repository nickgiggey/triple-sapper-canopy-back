//===== MODEL.JS =========
const enumber = require('../controllers/initiateController')
//------- create schema function -------
const mongoose = require('../db/connection.js')
	InitiateSchema = new mongoose.Schema(
		{
			code: {
				type: [String],
				required: true,
			},
			Authorization: [{
				type: String,
				enum: enumber.Authoriztion,
			}],
		},
		{
			timestamps: true,
			toJSON: {
				virtuals: true,
				transform: (_doc, ret) => {
					delete ret.Code;
					return ret;
				}
			},

		},
	);
const Initiate = mongoose.model('Initiate', InitiateSchema);

console.log(Initiate.schema.path('salutation.enum'));
const initiate = new Initiate();
console.log(initiate.schema.path('salutation.enum'));

module.exports = Initiate;
