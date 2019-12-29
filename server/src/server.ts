require("dotenv").config();

import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

import path from "path";
import { db } from "./config";
import route from "./route";

const app = express();

// parse application/x-www-form-urlencoded and parse application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(route);

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "client/build")));

// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

// Choose the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server start on port ${PORT}`);

  // db.on("error", console.error.bind(console, "MongoDB connection error:"));
  // db.once("open", () => {
  //   console.log("DB connected successfully");
  // });
});
