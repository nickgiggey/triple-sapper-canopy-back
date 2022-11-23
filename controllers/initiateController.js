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
		const newEmc2 = await Emc2.create({
			code: hashedPassword,
			Authorization: Authorization,
		});
		const stringedNewEmc2 = JSON.stringify(newEmc2);
		const existingUser = await Emc2.findOne({ Authorization });
		const stringedExist = JSON.stringify(existingUser.Authorization);
		const stringedAuth = stringedExist.replace(/\[|\]|"/g, "");
		console.log('stringedAuthh', stringedAuth);
		console.log('typeof stringedAuth', typeof stringedAuth);
		if (!stringedExist)
			return res.json({ msg: `No account with this email found` });
		const doesPasswordMatch = bcrypt.compareSync(Authorization, stringedAuth);
		console.log('Authorization', Authorization);
		console.log('typeof Authorization', typeof Authorization);
		console.log(`Compare ${Authorization},${stringedAuth}`);
		console.log('doesPasswordMatch', doesPasswordMatch);
		if (!doesPasswordMatch)
			return console.log(`Passwords did not match`);
		return res.status(201).json(stringedNewEmc2);
	} catch (error) {
		return next(error);
	}
});

module.exports = router;

const Emc2 = require('../models/Initiate');