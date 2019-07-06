const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: [true, "cannot be blank"],
    match: [/\S+@\S+\.\S+/, "email format is invalid"],
    index: true,
    unique: [true, "email already exist"],
    lowercase: true,
  },
  picture: String,
  hashedPassword: String,
  passwordResetToken: String,
  passwordResetExpires: Date,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", UserSchema);
