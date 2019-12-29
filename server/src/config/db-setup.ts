import mongoose from "mongoose";

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  bufferCommands: false,
  connectTimeoutMS: 30000
};

mongoose
  .connect(process.env.DB_PATH, options)
  .catch(error => console.log(error));

const db = mongoose.connection;

export default db;
