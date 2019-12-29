const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const SALT_ROUND = 10;

const UserSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: [true, "cannot be blank"],
    match: [/\S+@\S+\.\S+/, "email format is invalid"],
    index: true,
    unique: [true, "email already exist"],
    lowercase: true
  },
  picture: String,
  hashedPassword: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

UserSchema.methods.setHashedPassword = function(password) {
  const salt = bcrypt.genSaltSync(SALT_ROUND);
  this.hashedPassword = bcrypt.hashSync(password, salt);
};

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.hashedPassword);
};

UserSchema.methods.toJson = function() {
  return {
    name: this.name,
    email: this.email,
    picture: this.picture
  };
};

module.exports = mongoose.model("User", UserSchema);
