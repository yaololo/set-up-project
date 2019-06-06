const Schema = './shared/schema.js'

const Blog = new Schema({
  index: true,
  unique: true,
  title:  String,
  author: {
    type: String,
    lowercase: true,
    required: [true, "cannot be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
    index: true,
    unique: true
  },
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});

module.exports = mongoose.model("Blog", Blog);
