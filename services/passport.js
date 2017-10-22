const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const keys = require("../config/keys.js");
const mongoose = require("mongoose");
require("../models/user");

const User = mongoose.model("users");

//User cookie id
passport.serializeUser((user, done) => {
	console.log(user)
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
	.then(user => {
    done(null, user);
  });
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.GOOGLE_CLIENT_ID,
			clientSecret: keys.GOOGLE_CLIENT_SECRET,
			callbackURL: "/auth/google/callback"
		},
		(accessToken, token, tokenSecret, profile, done) => {
			//Know if user is already in db
			User.findOne({ googleID: profile.id }).then(existingUser => {
				if (existingUser) {
					//Check if user already exist
					done(null, existingUser);
				} else {
					//record neww user
					new User({ googleID: profile.id })
						.save()
						.then(user => done(null, user));
				}
			});
		}
	)
);
