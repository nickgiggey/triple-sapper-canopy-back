//===== CONTROLLER.js =========
//------- import express -------
const express = require('express');

//------- import router -------
const router = express.Router();
const Status = require('../models/Status');

router.get('/', (req, res, next) => {
	Status.find({})
		.populate({
			path: 'status',
			model: 'Status',
		})
		.then((status) => res.json(status))
		.catch(next);
});

router.get('/:id', (req, res, next) => {
	Status.findById(req.params.id)
		.populate({
			path: 'status',
			model: 'Status',
		})
		.then((status) => res.json(status))
		.catch(next);
});

router.post('/', (req, res, next) => {
	Status.create(req.body)
		.populate({
			path: 'status',
			model: 'Status',
		})
		.then((status) => res.json(status))
		.catch(next);
});

//------- export router ------

module.exports = router;
