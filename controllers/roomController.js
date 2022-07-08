//===== CONTROLLER.js =========
//------- import express -------
const express = require('express');

//------- import router -------
const router = express.Router();

//------- import model -------
const Room = require('../models/Room');

//------- router functions -------

//(.get , .post , .put , .patch , .delete)
router.get('/', (req, res, next) => {
	Room.find({})
		.populate('everything')
		.then((examples) => res.json(examples))
		.catch(next);
});

router.get('/:id', (req, res, next) => {
	Room.findById(req.params.id)
		.populate('everything')
		.then((example) => res.json(example))
		.catch(next);
});

router.post('/', (req, res, next) => {
	Room.create(req.body)
		.then((example) => res.json(example))
		.catch(next);
});

router.put('/:id', (req, res, next) => {
	Room.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
		.then((example) => res.json(example))
		.catch(next);
});

router.delete('/:id', (req, res, next) => {
	Room.findOneAndDelete({ _id: req.params.id })
		.then((example) => res.json(example))
		.catch(next);
});

//------- export router ------

module.exports = router;
