//===== CONTROLLER.js =========
//------- import express -------
const express = require('express');

//------- import router -------
const router = express.Router();

//------- import model -------
const Example = require('../models/Example');

//------- router functions -------

//(.get , .post , .put , .patch , .delete)
router.get('/', (req, res, next) => {
	Example.find({})
		.populate('everything')
		.then((examples) => res.json(examples))
		.catch(next);
});

router.get('/:id', (req, res, next) => {
	Example.findById(req.params.id)
		.populate('everything')
		.then((example) => res.json(example))
		.catch(next);
});

router.post('/', (req, res, next) => {
	Example.create(req.body)
		.then((example) => res.json(example))
		.catch(next);
});

router.put('/:id', (req, res, next) => {
	Example.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
		.then((example) => res.json(example))
		.catch(next);
});

router.delete('/:id', (req, res, next) => {
	Example.findOneAndDelete({ _id: req.params.id })
		.then((example) => res.json(example))
		.catch(next);
});

//------- export router ------

module.exports = router;
