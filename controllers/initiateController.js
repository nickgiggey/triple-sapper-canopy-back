const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

router.get('/', (req, res, next) => {
	Emc2.find({})
		.populate(false)
		.then((initiate) => res.json(initiate))
		.catch(next);
});

router.get('/:id', (req, res, next) => {
	Emc2.findById(req.params.id)
		.populate(false)
		.then((initiate) => res.json(initiate))
		.catch(next);
});

router.post('/', async (req, res, next) => {
	try {
		const hashedPassword = await bcrypt.hash(JSON.stringify(req.body.Code), 10);
		const Authorization = await bcrypt.hash(JSON.stringify(req.body.Authorization), 10);
		// console.log('typeof Authorization', typeof Authorization); // string

		const newEmc2 = await Emc2.create({
			code: hashedPassword,
			Authorization: Authorization,
		});
		console.log('newEmc2', newEmc2);
		// console.log('typeof newEmc2', typeof newEmc2); // object

		const stringedNewEmc2 = JSON.stringify(newEmc2);
		console.log('stringedNewEmc2', stringedNewEmc2);
		// console.log('typeof stringedNewEmc2', typeof stringedNewEmc2); // string

		const existingUser = await Emc2.findOne({ Authorization });
		console.log('existingUser', existingUser.Authorization);
		// console.log('typeof existingUser', typeof existingUser); //object

		const stringedExist = JSON.stringify(existingUser.Authorization)
		console.log('stringedExist', stringedExist);
		// console.log('typeof stringedExist', typeof stringedExist); // string
		
		if (!stringedExist)
			return res.json({ msg: `No account with this email found` });
		const doesPasswordMatch = bcrypt.compareSync(Authorization, stringedExist);
		console.log('Authorization', Authorization);
		// console.log('typeof req.body.Auth', typeof req.body.Authorization) //string
		console.log('doesPasswordMatch', doesPasswordMatch);
		// console.log('typeof doesPasswordMatch', typeof doesPasswordMatch); // boolean
		console.log(`Compare ${Authorization} ----- ${stringedExist}`);
		if (!doesPasswordMatch)
			return console.log(`Passwords did not match`); // output
		return res.status(201).json(stringedNewEmc2);
	} catch (error) {
		return next(error);
	}
});

module.exports = router;

const Emc2 = require('../models/Initiate');