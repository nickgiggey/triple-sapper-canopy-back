const express = require('express');
const app = express();

app.set('port', process.env.PORT || 1337);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mongoose = require('./db/connection');
const cors = require('cors');
app.use(cors());

const requestLogger = require('./middleware/request_logger');
app.use(requestLogger);

app.get('/', (req, res) => {
	res.redirect('/');
});

const profileController = require('./controllers/profileController');
app.use('/api/profile', profileController);
const initiateController = require('./controllers/initiateController');
app.use('/api/initiate', initiateController);
const statusController = require('./controllers/statusController');
app.use('/api/status', statusController);

app.listen(app.get('port'), () => {
	console.log(`Port: ${app.get('port')}`);
});