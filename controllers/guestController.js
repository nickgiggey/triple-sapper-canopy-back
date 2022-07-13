//===== CONTROLLER.js =========
//------- import express -------
const express = require('express');

//------- import router -------
const router = express.Router();

//------- import model -------
const Guest = require('../models/Guest');

//------- router functions -------

//(.get , .post , .put , .patch , .delete)
router.get('/', (req, res, next) => {
	Guest.find({})
		.populate({
			path: 'roominfo',
			model: 'Room',
		})
		.then((guests) => res.json(guests))
		.catch(next);
});

router.get('/:id', (req, res, next) => {
	Guest.findById(req.params.id)
		.populate({
			path: 'roominfo',
			model: 'Room',
		})
		.then((guest) => res.json(guest))
		.catch(next);
});

router.post('/', (req, res, next) => {
	Guest.create(req.body)
		.then((guest) => res.json(guest))
		.catch(next);
});

router.patch('/:id', (req, res, next) => {
	Guest.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
		.populate({
			path: 'roominfo',
			model: 'Room',
		})
		.then((guest) => res.json(guest))
		.catch(next);
});

router.delete('/:id', (req, res, next) => {
	Guest.findOneAndDelete({ _id: req.params.id })
		.then((guest) => res.json(guest))
		.catch(next);
});

//------- export router ------

module.exports = router;
