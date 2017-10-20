const express = require("express");
require('./services/passport');
const mongoose = require('mongoose');
const keys = require('./config/keys');

//DB connect
mongoose.connect(keys.mongoURI);

const app = express();
//Call the arrow function in routes and pass the argument app
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log("App started at :5000");
});
