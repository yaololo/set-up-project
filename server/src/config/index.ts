import { envConfig } from "./env-config";
import db from "./db-setup";

if (envConfig.isLocal) {
  require("dotenv").config();
} else if (envConfig.isTest) {
  /*
   ** TODO: add test config
   */
}

export { envConfig, db };
