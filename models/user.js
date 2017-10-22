const mongoose = require('mongoose');
const {Schema} = mongoose;
// the same it's like const Schema = mongoose.Schema

//Schema creation == Collection creation in mongodb
const userSchema = new Schema({
  googleID : String
});

//Ask mongoose to create a new collection called users
mongoose.model('users', userSchema);
