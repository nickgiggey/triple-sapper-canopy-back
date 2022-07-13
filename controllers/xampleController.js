// const express = require('express');
// const bcrypt = require('bcrypt');
// const User = require('../models/User');
// const router = express.Router();
// const { createUserToken, requireToken } = require('../middleware/auth');

// router.post('/signup', async (req, res, next) => {
// 	try {
// 		const hashedPassword = await bcrypt.hash(req.body.password, 10);
// 		const newUser = await User.create({
// 			password: hashedPassword,
// 			email: req.body.email,
// 		});
// 		return res.status(201).json(newUser);
// 	} catch (error) {
// 		return next(error);
// 	}
// });

// router.post('/signin', (req, res, next) => {
// 	User.findOne({ email: req.body.email })
// 		.then((user) => createUserToken(req, user))
// 		.then((token) => res.json({ token }))
// 		.catch(next);
// });
// module.exports = router;
