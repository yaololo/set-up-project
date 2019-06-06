const Schema = './shared/schema.js'

const User = new Schema({
  index: true,
  unique: true,
  name: String,
  email: {
    type: String,
    required: [true, "cannot be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
    index: true,
    unique: true,
    lowercase: true,
  },
  picture: String,
  hashedPassword: String,
  passwordResetToken: String,
  passwordResetExpires: Date,
  date: { type: Date, default: Date.now }
});
