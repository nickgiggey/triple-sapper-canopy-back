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
		.populate({
			path: 'guestinfo',
			model: 'Guest',
		})
		.then((rooms) => res.json(rooms))
		.catch(next);
});

router.get('/:id', (req, res, next) => {
	Room.findById(req.params.id)
		.populate({
			path: 'guestinfo',
			model: 'Guest',
		})
		.then((room) => res.json(room))
		.catch(next);
});

router.patch('/:id', (req, res, next) => {
	Room.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
		.populate({
			path: 'guestinfo',
			model: 'Guest',
		})
		.then((room) => res.json(room))
		.catch(next);
});


//------- export router ------

module.exports = router;
