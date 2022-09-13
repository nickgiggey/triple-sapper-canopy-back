//===== MODEL.JS =========

//------- create schema function -------
const mongoose = require('../db/connection.js')
	, InitiateSchema = new mongoose.Schema(
		{
			code: {
				type: [String],
				required: true,
			},
			Authorization: [{
				type: String,
				enum: 'Sapper',
			}],
		},
		{
			timestamps: true,
			toJSON: {
				virtuals: true,
				transform: (_doc, ret) => {
					delete ret.code;
					return ret;
				}
			},

		},
	);
const Initiate = mongoose.model('Initiate', InitiateSchema);

console.log(Initiate.schema.path('salutation.enum'));
const initiate = new Initiate();
console.log(initiate.schema.path('salutation.enum'));

//------- export model -------
module.exports = Initiate;
