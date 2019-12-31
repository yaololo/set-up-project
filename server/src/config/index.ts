import { envConfig } from "./env-config";
import db from "./db-setup";
import { checkRequiredEnvironment } from "./utils";

const env = ["PORT", "DB_PATH", "NODE_ENV", "PRIVATE_KEY"];
checkRequiredEnvironment(env);

export { envConfig, db, checkRequiredEnvironment };
