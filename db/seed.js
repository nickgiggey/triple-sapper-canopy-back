//===== SEED.JS =========
//-----  import mongoose  -----
const mongoose = require('./connection');
//------- import model -------
const Example = require('../models/Example');
//------- import seed data -------
const seedData = require('./seed.json');
//------- insertMany -------

Example.deleteMany()
	.then(() => Example.insertMany(seedData))
	.then((res, req) => console.log('successful seeding, ', req.body))
	.catch((error) => console.log('something went wrong while SEEDING:', error))
	.finally(() => {
		process.exit();
	});
