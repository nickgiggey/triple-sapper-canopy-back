const express = require('express');
// const bcrypt = require('bcrypt');
const router = express.Router();
// const { createUserToken } = require('../middleware/auth');

//===== CONTROLLER.js =========
//------- import express -------

//------- import router -------
const Profile = require('../models/Profile');

//(.get , .post , .put , .patch , .delete)
router.get('/', (req, res, next) => {
	Profile.find({})
		.populate({
			path: 'status',
			model: 'Status',
		})
		.then((profile) => res.json(profile))
		.catch(next);
});

router.get('/', (req, res, next) => {
	Profile.findById(req.params.id)
		.populate({
			path: 'profile',
			model: 'Profile',
		})
		.then((profile) => res.json(profile))
		.catch(next);
});

router.post('/', (req, res, next) => {
	Profile.create(req.body)
		.then((profile) => res.json(profile))
		.catch(next);
});

//------- export router ------

module.exports = router;