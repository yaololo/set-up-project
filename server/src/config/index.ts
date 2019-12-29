import { envConfig } from "./env-config";
import db from "./db-setup";

if (envConfig.isLocal) {
} else if (envConfig.isTest) {
  /*
   ** TODO: add test config
   */
}

export { envConfig, db };
