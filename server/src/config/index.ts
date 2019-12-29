import { envConfig } from "./env-config";

if (envConfig.isLocal) {
  require("dotenv").config();
} else if (envConfig.isTest) {
  /*
   ** TODO: add test config
   */
}

export { envConfig };
