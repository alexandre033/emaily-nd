const express = require("express");
const passport = require("passport");
const keys = require("./config/keys.js");
const app = express();
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;


passport.use(
	new GoogleStrategy(
		{
			clientID: keys.GOOGLE_CLIENT_ID,
			clientSecret: keys.GOOGLE_CLIENT_SECRET,
			callbackURL: "/auth/google/callback"
		},
    (accessToken) => {
      console.log(accessToken);
    }
	)
);

app.get(
	'/auth/google',
	passport.authenticate('google', {
		scope: ["profile", "email"]
	})
);



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log("App started at :5000");
});
