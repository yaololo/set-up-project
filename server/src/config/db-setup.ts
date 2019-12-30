import mongoose from "mongoose";
import { checkRequiredEnvironment } from "./utils";

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  bufferCommands: false,
  connectTimeoutMS: 30000
};

checkRequiredEnvironment(["DB_PATH"]);

mongoose
  .connect(process.env.DB_PATH!, options)
  .catch((error: any) => console.log(error));

const db = mongoose.connection;

export default db;
