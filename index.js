const express = require('express');
const passport = require('passport');
const app = express();
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passeport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://www.example.com/auth/google/callback"
}));


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
  console.log('App started at :5000');
});
