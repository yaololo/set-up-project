import { envConfig } from "./env-config";
import db from "./db-setup";
import { checkRequiredEnvironment } from "./utils";

if (envConfig.isLocal) {
} else if (envConfig.isTest) {
  /*
   ** TODO: add test config
   */
}

export { envConfig, db, checkRequiredEnvironment };
