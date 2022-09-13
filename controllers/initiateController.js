const express = require('express');
const bcrypt = require('bcrypt');
const Emc2 = require('../models/Initiate');
const router = express.Router();

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
		const hashedPassword = await bcrypt.hash(JSON.stringify(req.body.code), 10);
		const newEmc2 = await Emc2.create({
			code: hashedPassword,
			Authorization: req.body.Authorization,
		});
		return res.status(201).json(newEmc2);
	} catch (error) {
		return next(error);
	}
});

module.exports = router;
