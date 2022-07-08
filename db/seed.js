//===== SEED.JS =========
//-----  import mongoose  -----
const mongoose = require('./connection');
//------- import model -------
const Room = require('../models/Room');
//------- import seed data -------
const seedData = require('./seed.json');
//------- insertMany -------

Room.deleteMany().then(() => {
	Room.insertMany(seedData)
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.log(err);
		})
		.finally(() => process.exit());
});
