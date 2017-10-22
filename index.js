const express = require("express");
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

//DB connect
mongoose.connect(keys.mongoURI);
require('./models/user')
require('./services/passport');

const app = express();

app.use(
	cookieSession({
		maxAge : 30 *24 *60 *60 *1000,
		keys : [keys.cookieKey]
	})
)
app.use(passport.initialize());
app.use(passport.session());

//Call the arrow function in routes and pass the argument app
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log("App started at :5000");
});
