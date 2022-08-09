require('dotenv').config()
const path = require('path');
const express = require('express');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoDbApi = require('./apis/mongoDbApi');
var mongoRouter = mongoDbApi.router;
// var mediavaletApi = require('./apis/mediavaletApi');
// var mediavaletRouter = mediavaletApi.router;

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json({limit:  '10mb'}));
app.use(cors());
// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use('/mongodb', mongoRouter);
// app.use('/mediavalet', mediavaletRouter);
app.get('/api', (req, res) => {
	res.json({ message: 'Hello from server!' });
});

app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});