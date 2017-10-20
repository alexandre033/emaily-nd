const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const keys = require("../config/keys.js");

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.GOOGLE_CLIENT_ID,
			clientSecret: keys.GOOGLE_CLIENT_SECRET,
			callbackURL: "/auth/google/callback"
		},
    (accessToken, token, tokenSecret, profile, done) => {
      console.log("accessToken :", accessToken);
			console.log("profile :", profile);
			console.log("tokenSecret", tokenSecret);
    }
	)
);
